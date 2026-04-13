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
  const output: string[] = [];
  
  // Create isolated execution context
  const context = {
    console: {
      log: (...args: unknown[]) => {
        output.push(args.map(arg => JSON.stringify(arg)).join(' '));
      },
    },
  };

  // Get the function call for this problem
  const testCall = getTestCall(problemId, input);
  
  try {
    // Combine user code with test call in single execution
    let fullCode;
    
    // For merge-k-sorted-lists, testCall already includes helper functions
    if (problemId === 'merge-k-sorted-lists') {
      fullCode = `
        ${code}
        ${testCall}
      `;
    } else {
      fullCode = `
        ${code}
        console.log(${testCall});
      `;
    }
    
    // Execute in single context so function is available
    const runTest = new Function('console', fullCode);
    runTest(context.console);
    
    return output.length > 0 ? output[output.length - 1] : '';
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`${errorMsg}`);
  }
}

// Get the function call string based on problem type
function getTestCall(problemId: string, input: string): string {
  // For two-sum: input is "[2,7,11,15], 9" -> call twoSum([2,7,11,15], 9)
  if (problemId === 'two-sum') {
    return `twoSum(${input})`;
  }
  
  // For valid-parentheses: input is '"()[]{}"' -> call isValid("()[]{}")
  if (problemId === 'valid-parentheses') {
    return `isValid(${input})`;
  }
  
  // For merge-sorted-array
  if (problemId === 'merge-sorted-array') {
    return `merge(${input})`;
  }
  
  // For max-subarray
  if (problemId === 'max-subarray') {
    return `maxSubArray(${input})`;
  }
  
  // For palindrome-number
  if (problemId === 'palindrome-number') {
    return `isPalindrome(${input})`;
  }
  
  // For trapping-rain-water
  if (problemId === 'trapping-rain-water') {
    return `trap(${input})`;
  }
  
  // For merge-k-sorted-lists
  if (problemId === 'merge-k-sorted-lists') {
    // Helper functions to convert arrays to linked lists and vice versa
    return `
      // Convert array to linked list
      function arrayToList(arr) {
        if (!arr || arr.length === 0) return null;
        const head = { val: arr[0], next: null };
        let current = head;
        for (let i = 1; i < arr.length; i++) {
          current.next = { val: arr[i], next: null };
          current = current.next;
        }
        return head;
      }
      
      // Convert linked list to array
      function listToArray(head) {
        const result = [];
        while (head) {
          result.push(head.val);
          head = head.next;
        }
        return result;
      }
      
      // Convert input arrays to linked lists
      const inputLists = ${input}.map(arr => arrayToList(arr));
      const result = mergeKLists(inputLists);
      console.log(JSON.stringify(listToArray(result)));
    `;
  }
  
  // Default: try to call first function found in code
  return `main(${input})`;
}
