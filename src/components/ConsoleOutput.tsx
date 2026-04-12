'use client';

import { SubmissionResult } from '@/types';

interface ConsoleOutputProps {
  result: SubmissionResult | null;
  isRunning: boolean;
}

export default function ConsoleOutput({ result, isRunning }: ConsoleOutputProps) {
  if (isRunning) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-500">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
          <span>Running tests...</span>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        <div className="text-center">
          <div className="text-4xl mb-2">▶️</div>
          <p>Run your code to see results</p>
        </div>
      </div>
    );
  }

  const { passed, testResults, error } = result;

  if (error) {
    return (
      <div className="h-full p-4 overflow-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-semibold mb-2">❌ Runtime Error</h3>
          <pre className="text-red-700 text-sm whitespace-pre-wrap font-mono">{error}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-4 overflow-auto">
      <div className="mb-4">
        <div
          className={`text-lg font-semibold ${
            passed ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {passed ? '✅ All tests passed!' : `❌ ${testResults.filter((t) => !t.passed).length} test(s) failed`}
        </div>
        <div className="text-sm text-gray-500 mt-1">
          {testResults.filter((t) => t.passed).length}/{testResults.length} tests passed
          {result.runtime && ` • Runtime: ${result.runtime}ms`}
        </div>
      </div>

      <div className="space-y-3">
        {testResults.map((test, index) => (
          <div
            key={index}
            className={`rounded-lg border p-3 ${
              test.passed
                ? 'bg-emerald-50 border-emerald-200'
                : 'bg-rose-50 border-rose-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Test Case {index + 1}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  test.passed ? 'bg-emerald-200 text-emerald-700' : 'bg-rose-200 text-rose-700'
                }`}
              >
                {test.passed ? '✓ Passed' : '✗ Failed'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-500">Input:</span>
                <pre className="mt-1 bg-white rounded p-2 font-mono text-gray-700 overflow-x-auto">
                  {test.input}
                </pre>
              </div>
              <div>
                <span className="text-gray-500">Expected:</span>
                <pre className="mt-1 bg-white rounded p-2 font-mono text-gray-700 overflow-x-auto">
                  {test.expectedOutput}
                </pre>
              </div>
            </div>
            {!test.passed && (
              <div className="mt-2">
                <span className="text-gray-500">Your Output:</span>
                <pre className="mt-1 bg-white rounded p-2 font-mono text-rose-700 overflow-x-auto">
                  {test.actualOutput}
                </pre>
              </div>
            )}
            <div className="mt-2 text-xs text-gray-400">Runtime: {test.runtime}ms</div>
          </div>
        ))}
      </div>
    </div>
  );
}
