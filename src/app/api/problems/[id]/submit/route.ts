import { NextRequest, NextResponse } from 'next/server';
import { getProblemById } from '@/data/problems';
import { SubmissionResult, TestResult } from '@/types';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const problem = getProblemById(id);

  if (!problem) {
    return NextResponse.json({ error: 'Problem not found' }, { status: 404 });
  }

  try {
    const body = await request.json();
    const { code } = body;

    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 });
    }

    // Extract the function from user's code
    const testResults: TestResult[] = [];
    let allPassed = true;
    let runtime = 0;

    // Parse test cases from problem
    for (let i = 0; i < problem.testCases.length; i++) {
      const testCase = problem.testCases[i];
      const startTime = Date.now();

      try {
        // Create a safe execution context
        const result = await executeCode(code, testCase.input, problem.id);
        const endTime = Date.now();
        const testRuntime = endTime - startTime;
        runtime += testRuntime;

        const passed = normalizeOutput(result) === normalizeOutput(testCase.expectedOutput);

        if (!passed) {
          allPassed = false;
        }

        testResults.push({
          testCase: i + 1,
          passed,
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: result,
          runtime: testRuntime,
        });
      } catch (error) {
        allPassed = false;
        testResults.push({
          testCase: i + 1,
          passed: false,
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          runtime: 0,
        });
      }
    }

    const submissionResult: SubmissionResult = {
      passed: allPassed,
      testResults,
      runtime,
    };

    return NextResponse.json(submissionResult);
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to execute code',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Normalize output for comparison
function normalizeOutput(output: string): string {
  return output
    .replace(/\s+/g, '')
    .replace(/,\s*/g, ',')
    .trim();
}

// Execute user code safely
async function executeCode(code: string, input: string, problemId: string): Promise<string> {
  // Create a sandbox-like environment
  const consoleOutput: string[] = [];
  
  const customConsole = {
    log: (...args: unknown[]) => {
      consoleOutput.push(args.map(arg => JSON.stringify(arg)).join(' '));
    },
    error: (...args: unknown[]) => {
      consoleOutput.push('ERROR: ' + args.map(arg => JSON.stringify(arg)).join(' '));
    },
  };

  // Wrap the code to capture output
  const wrappedCode = `
    (function() {
      const console = {
        log: (...args) => {
          __output__.push(args.map(arg => JSON.stringify(arg)).join(' '));
        },
        error: (...args) => {
          __output__.push('ERROR: ' + args.map(arg => JSON.stringify(arg)).join(' '));
        }
      };
      
      try {
        ${code}
      } catch (e) {
        __output__.push('Runtime Error: ' + e.message);
      }
      
      return __output__;
    })()
  `;

  // Execute in a VM-like context (simplified for browser/server compatibility)
  // In production, use a proper sandbox like vm2 or isolated-vm
  const output: string[] = [];
  
  // Create function with isolated scope
  const executeFunction = new Function('__output__', wrappedCode);
  const result = executeFunction(output);
  
  // Return last console.log output or the result
  if (output.length > 0) {
    return output[output.length - 1];
  }
  
  return '';
}
