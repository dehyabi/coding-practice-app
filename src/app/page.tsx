'use client';

import { useState } from 'react';
import ProblemList from '@/components/ProblemList';
import { problems } from '@/data/problems';

export default function Home() {
  const [filter, setFilter] = useState('All');

  const filteredProblems =
    filter === 'All'
      ? problems
      : problems.filter((p) => p.difficulty === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                💻
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CodePractice</h1>
                <p className="text-xs text-gray-500">Free coding interview preparation</p>
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Problems
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Contests
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Discuss
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Practice Coding Problems
          </h2>
          <p className="text-gray-600">
            Prepare for technical interviews with curated problems from easy to hard
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-blue-600">{problems.length}</div>
            <div className="text-sm text-gray-500 mt-1">Total Problems</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-emerald-600">
              {problems.filter((p) => p.difficulty === 'Easy').length}
            </div>
            <div className="text-sm text-gray-500 mt-1">Easy</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-amber-600">
              {problems.filter((p) => p.difficulty === 'Medium').length}
            </div>
            <div className="text-sm text-gray-500 mt-1">Medium</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-rose-600">
              {problems.filter((p) => p.difficulty === 'Hard').length}
            </div>
            <div className="text-sm text-gray-500 mt-1">Hard</div>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-6">
          <div className="flex gap-2">
            {['All', 'Easy', 'Medium', 'Hard'].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setFilter(difficulty)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === difficulty
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Problem List */}
        <ProblemList problems={filteredProblems} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>Free coding practice platform for technical interview preparation</p>
          <p className="mt-1">Built with Next.js, TypeScript & Tailwind CSS • Open Source on GitHub 🚀</p>
          <p className="mt-2">
            <a
              href="https://github.com/dehyabi/coding-practice-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
