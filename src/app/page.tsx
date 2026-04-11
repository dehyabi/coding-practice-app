'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProblemList from '@/components/ProblemList';
import { problems } from '@/data/problems';
import { mcqQuestions } from '@/data/fullstack-questions';

export default function Home() {
  const [mode, setMode] = useState<'fundamentals' | 'fullstack'>('fundamentals');
  const [filter, setFilter] = useState('All');

  // Filter problems by mode
  const fundamentalsIds = ['two-sum', 'valid-parentheses', 'merge-sorted-array', 'max-subarray', 'palindrome-number', 'merge-k-sorted-lists', 'trapping-rain-water'];
  const fullStackIds = ['nestjs-crud-api', 'nextjs-data-fetching', 'jwt-auth-guard', 'api-response-formatter', 'two-sum-nested', 'validate-parentheses-api', 'nestjs-advanced-auth', 'nextjs-infinite-scroll'];
  
  const currentProblems = mode === 'fundamentals'
    ? problems.filter(p => fundamentalsIds.includes(p.id))
    : problems.filter(p => fullStackIds.includes(p.id));

  const filteredProblems =
    filter === 'All'
      ? currentProblems
      : currentProblems.filter((p) => p.difficulty === filter);

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
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-gray-900">
                About
              </Link>
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

        {/* Mode Selector */}
        <div className="mb-8">
          <div className="flex gap-2 bg-white p-2 rounded-xl shadow-sm border border-gray-200 inline-flex">
            <button
              onClick={() => setMode('fundamentals')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                mode === 'fundamentals'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📚 Fundamentals
              <span className="block text-xs opacity-75 mt-1">Arrays, Strings, Algorithms</span>
            </button>
            <button
              onClick={() => setMode('fullstack')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                mode === 'fullstack'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              ⚡ Full Stack (NestJS + Next.js)
              <span className="block text-xs opacity-75 mt-1">Framework-specific + MCQs</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-blue-600">{currentProblems.length}</div>
            <div className="text-sm text-gray-500 mt-1">Total Problems</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-emerald-600">
              {currentProblems.filter((p) => p.difficulty === 'Easy').length}
            </div>
            <div className="text-sm text-gray-500 mt-1">Easy</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-amber-600">
              {currentProblems.filter((p) => p.difficulty === 'Medium').length}
            </div>
            <div className="text-sm text-gray-500 mt-1">Medium</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-rose-600">
              {currentProblems.filter((p) => p.difficulty === 'Hard').length}
            </div>
            <div className="text-sm text-gray-500 mt-1">Hard</div>
          </div>
        </div>

        {mode === 'fullstack' && (
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🎯 Full Stack Practice Mode</h3>
            <p className="text-gray-700 mb-4">
              This mode includes NestJS backend problems, Next.js frontend challenges, and full-stack integration tasks.
              Also includes {mcqQuestions.length} multiple-choice questions for interview prep!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <div className="text-2xl mb-2">🔧</div>
                <div className="font-semibold text-gray-800">NestJS</div>
                <div className="text-sm text-gray-600">Controllers, Services, Guards, JWT</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-indigo-100">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-semibold text-gray-800">Next.js</div>
                <div className="text-sm text-gray-600">App Router, Server Components, Data Fetching</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-100">
                <div className="text-2xl mb-2">📝</div>
                <div className="font-semibold text-gray-800">MCQs</div>
                <div className="text-sm text-gray-600">{mcqQuestions.length} practice questions</div>
              </div>
            </div>
          </div>
        )}

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

        {/* MCQ Section for Full Stack Mode */}
        {mode === 'fullstack' && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📝 Multiple Choice Practice</h3>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-gray-600 mb-4">
                Test your knowledge with {mcqQuestions.length} questions covering JavaScript, TypeScript, NestJS, Next.js, and API design.
              </p>
              <div className="space-y-4">
                {mcqQuestions.map((q) => (
                  <MCQCard key={q.id} question={q} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left text-gray-500 text-sm">
              <p>Free coding practice platform for technical interview preparation</p>
              <p className="mt-1">
                Built with Next.js, TypeScript & Tailwind CSS by{' '}
                <a
                  href="/about"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Dehya Qalbi
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dehyabi/coding-practice-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
              >
                ⭐ Star on GitHub
              </a>
              <a
                href="/about"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MCQCard({ question }: { question: typeof mcqQuestions[0] }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    setSelectedAnswer(idx);
    setShowAnswer(true);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p className="font-medium text-gray-900 mb-4">{question.question}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
        {question.options.map((option, idx) => {
          const isSelected = selectedAnswer === idx;
          const isCorrect = idx === question.correct;
          const showResult = showAnswer;

          let bgColor = 'bg-gray-50 hover:bg-gray-100';
          let borderColor = 'border-gray-200';
          let textColor = 'text-gray-700';

          if (showResult) {
            if (isCorrect) {
              bgColor = 'bg-emerald-50';
              borderColor = 'border-emerald-300';
              textColor = 'text-emerald-800';
            } else if (isSelected && !isCorrect) {
              bgColor = 'bg-rose-50';
              borderColor = 'border-rose-300';
              textColor = 'text-rose-800';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={showAnswer}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${bgColor} ${borderColor} ${textColor}
                ${!showAnswer ? 'cursor-pointer hover:shadow-sm hover:-translate-y-0.5' : 'cursor-default'}
                ${isSelected ? 'ring-2 ring-offset-2 ' + (isCorrect ? 'ring-emerald-500' : 'ring-rose-500') : ''}
              `}
            >
              <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>
              {option}
              {showResult && isCorrect && (
                <span className="float-right text-emerald-600">✓ Correct</span>
              )}
              {showResult && isSelected && !isCorrect && (
                <span className="float-right text-rose-600">✗ Wrong</span>
              )}
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">
              {selectedAnswer === question.correct ? '✅' : '💡'}
            </span>
            <strong className="text-blue-900">
              {selectedAnswer === question.correct ? 'Correct!' : 'Explanation:'}
            </strong>
          </div>
          <p className="text-blue-800 text-sm">{question.explanation}</p>
          {selectedAnswer !== question.correct && (
            <p className="text-blue-700 text-sm mt-2">
              <strong>Correct answer:</strong> {String.fromCharCode(65 + question.correct)}. {question.options[question.correct]}
            </p>
          )}
        </div>
      )}
      {!showAnswer && (
        <button
          onClick={() => setShowAnswer(true)}
          className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Skip & Show Answer
        </button>
      )}
    </div>
  );
}
