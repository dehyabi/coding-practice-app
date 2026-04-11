'use client';

import Link from 'next/link';
import { Problem } from '@/types';

interface ProblemListProps {
  problems: Problem[];
}

export default function ProblemList({ problems }: ProblemListProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-emerald-500 bg-emerald-50';
      case 'Medium':
        return 'text-amber-500 bg-amber-50';
      case 'Hard':
        return 'text-rose-500 bg-rose-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Difficulty
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Tags
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {problems.map((problem, index) => (
              <tr key={problem.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-400">{index + 1}</span>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4">
                  <Link
                    href={`/problems/${problem.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline text-sm sm:text-base"
                  >
                    {problem.title}
                  </Link>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                      problem.difficulty
                    )}`}
                  >
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4 hidden sm:table-cell">
                  <div className="flex gap-2 flex-wrap">
                    {problem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
