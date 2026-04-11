'use client';

import { useState, useCallback } from 'react';

interface CodeEditorProps {
  starterCode: string;
  onCodeChange: (code: string) => void;
  onSubmit: () => void;
  isRunning: boolean;
}

export default function CodeEditor({
  starterCode,
  onCodeChange,
  onSubmit,
  isRunning,
}: CodeEditorProps) {
  const [code, setCode] = useState(starterCode);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newCode = e.target.value;
      setCode(newCode);
      onCodeChange(newCode);
    },
    [onCodeChange]
  );

  const handleReset = () => {
    setCode(starterCode);
    onCodeChange(starterCode);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Solution.tsx</span>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
            TypeScript
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Reset
          </button>
          <button
            onClick={onSubmit}
            disabled={isRunning}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              isRunning
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-emerald-500 hover:bg-emerald-600 text-white'
            }`}
          >
            {isRunning ? 'Running...' : 'Run Code'}
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-50 border-r border-gray-200 flex flex-col items-end pr-2 pt-4 text-xs text-gray-400 font-mono select-none">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        <textarea
          value={code}
          onChange={handleChange}
          className="w-full h-full pl-14 pr-4 py-4 font-mono text-sm bg-white border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent leading-6"
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}
