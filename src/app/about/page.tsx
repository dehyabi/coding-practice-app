import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - CodePractice',
  description: 'Learn about the creator of CodePractice - a free coding interview preparation platform.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                💻
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CodePractice</h1>
                <p className="text-xs text-gray-500">Free coding interview preparation</p>
              </div>
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                Problems
              </Link>
              <a
                href="https://github.com/dehyabi/coding-practice-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-6xl shadow-xl">
              👨‍💻
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hi, I'm Dehya Qalbi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full-Stack Developer • Open Source Enthusiast • Building tools for the developer community
          </p>
        </div>

        {/* Story */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Why I Built This</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              When I started preparing for technical interviews, I found that most coding practice platforms 
              were either paid or didn't focus enough on <strong>full-stack development</strong>. As someone 
              preparing for roles involving <strong>NestJS and Next.js</strong>, I needed a resource that 
              covered both algorithms and framework-specific patterns.
            </p>
            <p className="mb-4">
              So I built <strong>CodePractice</strong> — a free, open-source platform that combines:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Classic algorithm problems (arrays, strings, dynamic programming)</li>
              <li>Full-stack challenges (NestJS APIs, Next.js components)</li>
              <li>Multiple-choice questions for framework concepts</li>
              <li>Instant feedback with detailed explanations</li>
            </ul>
            <p className="mb-4">
              This platform helped <strong>me</strong> prepare for interviews, and now I'm sharing it with 
              the community. Whether you're a junior developer or experienced engineer looking to brush up 
              on skills, I hope this resource helps you land your dream job!
            </p>
            <p className="font-semibold text-gray-900">
              Built with ❤️ for developers, by a developer.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="font-semibold text-gray-800">Next.js 16</div>
              <div className="text-sm text-gray-500">App Router</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-3xl mb-2">📘</div>
              <div className="font-semibold text-gray-800">TypeScript</div>
              <div className="text-sm text-gray-500">Type-safe</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-semibold text-gray-800">Tailwind CSS</div>
              <div className="text-sm text-gray-500">v4</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-3xl mb-2">▲</div>
              <div className="font-semibold text-gray-800">Vercel</div>
              <div className="text-sm text-gray-500">Deployment</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✨ Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">📚</span>
              <div>
                <div className="font-semibold text-gray-800">15+ Problems</div>
                <div className="text-sm text-gray-600">From Easy to Hard difficulty</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="font-semibold text-gray-800">Full-Stack Mode</div>
                <div className="text-sm text-gray-600">NestJS + Next.js challenges</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">📝</span>
              <div>
                <div className="font-semibold text-gray-800">15 MCQs</div>
                <div className="text-sm text-gray-600">Test your knowledge</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">🎯</span>
              <div>
                <div className="font-semibold text-gray-800">Instant Feedback</div>
                <div className="text-sm text-gray-600">Real-time test execution</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">💯</span>
              <div>
                <div className="font-semibold text-gray-800">100% Free</div>
                <div className="text-sm text-gray-600">No account required</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">🔓</span>
              <div>
                <div className="font-semibold text-gray-800">Open Source</div>
                <div className="text-sm text-gray-600">Contribute on GitHub</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">🤝 Let's Connect</h2>
          <p className="mb-6 opacity-90">
            I'm always open to discussing new opportunities, collaborating on open-source projects, 
            or just chatting about technology!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/dehyabi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dehyabi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dehyafullstack@gmail.com"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <span>🚀</span>
            Start Practicing Now
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>Built by Dehya Qalbi • Full-Stack Developer</p>
          <p className="mt-1">
            <a
              href="https://github.com/dehyabi/coding-practice-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Source on GitHub
            </a>
          </p>
          <p className="mt-2">Made with ❤️ for the developer community</p>
        </div>
      </footer>
    </div>
  );
}