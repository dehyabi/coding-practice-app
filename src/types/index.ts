export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: Example[];
  constraints: string[];
  starterCode: string;
  testCases: TestCase[];
  tags: string[];
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  hidden?: boolean;
}

export interface SubmissionResult {
  passed: boolean;
  testResults: TestResult[];
  runtime?: number;
  memory?: number;
  error?: string;
}

export interface TestResult {
  testCase: number;
  passed: boolean;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  runtime: number;
}

export interface Submission {
  id: string;
  problemId: string;
  code: string;
  language: string;
  timestamp: Date;
  result: SubmissionResult;
}
