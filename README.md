# 💻 CodePractice

A free, open-source coding interview preparation platform built with Next.js. Practice coding problems with a HackerRank-style interface.

![CodePractice](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Problem List** - Browse curated coding problems by difficulty
- **Interactive Code Editor** - Write and test your solutions in-browser
- **Real-time Test Execution** - Get instant feedback with detailed test results
- **Split-screen Layout** - View problem description and code side-by-side
- **Responsive Design** - Works on desktop, tablet, and mobile
- **100% Free & Open Source** - No account required, no paywalls

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dehyabi/coding-practice-app.git

# Navigate to project directory
cd coding-practice-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start practicing!

### Build for Production

```bash
npm run build
npm start
```

## 📦 Included Problems

| Problem | Difficulty | Topics |
|---------|------------|--------|
| Two Sum | Easy | Array, Hash Table |
| Valid Parentheses | Easy | String, Stack |
| Merge Sorted Array | Easy | Array, Two Pointers |
| Maximum Subarray | Medium | Array, Dynamic Programming |
| Palindrome Number | Easy | Math |

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Code Execution:** Node.js VM (sandboxed)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page (problem list)
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── problems/
│   │   └── [id]/
│   │       └── page.tsx            # Problem detail page
│   └── api/
│       └── problems/
│           └── [id]/
│               └── submit/
│                   └── route.ts    # Code execution API
├── components/
│   ├── ProblemList.tsx             # Problem table component
│   ├── CodeEditor.tsx              # Code editor with line numbers
│   └── ConsoleOutput.tsx           # Test results display
├── data/
│   └── problems.ts                 # Problem definitions
└── types/
    └── index.ts                    # TypeScript types
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Add new problems** - Create more coding challenges
2. **Improve UI/UX** - Make the interface better
3. **Add features** - Leaderboards, user progress tracking, etc.
4. **Fix bugs** - Report and fix issues

### How to Contribute

```bash
# Fork the repository
# Create your feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m 'Add some amazing feature'

# Push to the branch
git push origin feature/amazing-feature

# Open a Pull Request
```

## 📝 Adding New Problems

To add a new problem, edit `src/data/problems.ts`:

```typescript
{
  id: 'problem-slug',
  title: 'Problem Title',
  difficulty: 'Easy' | 'Medium' | 'Hard',
  description: 'Problem description with markdown support',
  examples: [
    { input: '...', output: '...', explanation: '...' }
  ],
  constraints: ['Constraint 1', 'Constraint 2'],
  starterCode: `function solution(args) {\n  // Your code here\n}`,
  testCases: [
    { input: '...', expectedOutput: '...' }
  ],
  tags: ['Array', 'String'],
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Problem descriptions inspired by [LeetCode](https://leetcode.com)
- UI design inspired by [HackerRank](https://hackerrank.com)
- Built for the community, by the community

## 📬 Contact

- **GitHub:** [@dehyabi](https://github.com/dehyabi)
- **Project Link:** [https://github.com/dehyabi/coding-practice-app](https://github.com/dehyabi/coding-practice-app)

---

<p align="center">
  Made with ❤️ for developers preparing for technical interviews
  <br>
  Free forever • Open Source • No account required
</p>