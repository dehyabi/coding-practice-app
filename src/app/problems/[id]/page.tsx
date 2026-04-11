'use client';

import { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getProblemById } from '@/data/problems';
import CodeEditor from '@/components/CodeEditor';
import ConsoleOutput from '@/components/ConsoleOutput';
import { SubmissionResult } from '@/types';

export default function ProblemPage() {
  const params = useParams();
  const problemId = params.id as string;
  const problem = getProblemById(problemId);

  const [code, setCode] = useState('');
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsRunning(true);
    setResult(null);

    try {
      const response = await fetch(`/api/problems/${problemId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setResult({
          passed: false,
          testResults: [],
          error: data.error || 'Failed to submit',
        });
      }
    } catch (error) {
      setResult({
        passed: false,
        testResults: [],
        error: error instanceof Error ? error.message : 'Network error',
      });
    } finally {
      setIsRunning(false);
    }
  }, [code, problemId]);

  if (!problem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Problem Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Problems
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <span>←</span>
                <span className="text-sm font-medium">Back</span>
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <h1 className="text-lg font-semibold text-gray-900">{problem.title}</h1>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  problem.difficulty === 'Easy'
                    ? 'bg-emerald-100 text-emerald-700'
                    : problem.difficulty === 'Medium'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-rose-100 text-rose-700'
                }`}
              >
                {problem.difficulty}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Split View */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 gap-0" style={{ height: 'calc(100vh - 56px)' }}>
          {/* Left Panel - Problem Description */}
          <div className="border-r border-gray-200 overflow-y-auto bg-white">
            <div className="p-6">
              <div className="prose prose-sm max-w-none">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                <div
                  className="text-gray-700 whitespace-pre-line leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: problem.description
                      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">$1</code>')
                      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'),
                  }}
                />

                <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">Examples</h3>
                <div className="space-y-4">
                  {problem.examples.map((example, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="font-medium text-gray-700 mb-2">Example {index + 1}:</div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-500">Input:</span>{' '}
                          <code className="bg-white px-2 py-1 rounded">{example.input}</code>
                        </div>
                        <div>
                          <span className="text-gray-500">Output:</span>{' '}
                          <code className="bg-white px-2 py-1 rounded">{example.output}</code>
                        </div>
                        {example.explanation && (
                          <div>
                            <span className="text-gray-500">Explanation:</span>{' '}
                            <span className="text-gray-700">{example.explanation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">Constraints</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {problem.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-2 flex-wrap">
                  {problem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Code Editor & Console */}
          <div className="flex flex-col" style={{ height: 'calc(100vh - 56px)' }}>
            {/* Code Editor - Top 60% */}
            <div className="flex-1 p-4 border-b border-gray-200 overflow-hidden" style={{ flex: '0 0 60%' }}>
              <CodeEditor
                starterCode={problem.starterCode}
                onCodeChange={setCode}
                onSubmit={handleSubmit}
                isRunning={isRunning}
              />
            </div>

            {/* Console Output - Bottom 40% */}
            <div className="flex-1 overflow-hidden bg-white" style={{ flex: '0 0 40%' }}>
              <div className="h-full border-t-4 border-gray-200">
                <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-700">Console</h3>
                  <span className="text-xs text-gray-500">Test Results</span>
                </div>
                <ConsoleOutput result={result} isRunning={isRunning} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
