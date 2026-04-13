import { Problem } from '@/types';

export const fullStackProblems: Problem[] = [
  {
    id: 'nestjs-crud-api',
    title: 'Create NestJS CRUD API',
    difficulty: 'Medium',
    description: `Implement a complete CRUD API endpoint in NestJS for a \`Task\` entity.

Create a controller with the following endpoints:
- GET /tasks - Return all tasks
- GET /tasks/:id - Return single task by ID
- POST /tasks - Create new task
- PATCH /tasks/:id - Update task partially
- DELETE /tasks/:id - Delete task

Use proper decorators, dependency injection, and return appropriate HTTP status codes.`,
    examples: [
      {
        input: 'GET /tasks',
        output: '[{ id: 1, title: "Task 1", completed: false }]',
        explanation: 'Returns array of all tasks',
      },
      {
        input: 'POST /tasks with { title: "New Task" }',
        output: '{ id: 2, title: "New Task", completed: false }',
        explanation: 'Creates and returns new task with status 201',
      },
    ],
    constraints: [
      'Use @Controller, @Get, @Post, @Patch, @Delete decorators',
      'Inject service via constructor',
      'Return 404 if task not found',
      'Use async/await',
    ],
    starterCode: `import { Controller, Get, Post, Patch, Delete, Param, Body, NotFoundException, HttpStatus } from '@nestjs/common';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Controller('tasks')
export class TasksController {
  private tasks: Task[] = [
    { id: 1, title: 'Task 1', completed: false }
  ];
  private nextId = 2;

  // Implement all CRUD methods here
  
}

// Test your solution
const controller = new TasksController();
console.log(controller.findAll()); // [{ id: 1, title: 'Task 1', completed: false }]
console.log(controller.findOne(1)); // { id: 1, title: 'Task 1', completed: false }
console.log(controller.create({ title: 'New Task' })); // { id: 2, title: 'New Task', completed: false }`,
    testCases: [
      { input: 'findAll()', expectedOutput: '[{"id":1,"title":"Task 1","completed":false}]' },
      { input: 'findOne(1)', expectedOutput: '{"id":1,"title":"Task 1","completed":false}' },
      { input: 'create({"title":"New Task"})', expectedOutput: '{"id":2,"title":"New Task","completed":false}' },
      { input: 'update(1,{"title":"Updated"})', expectedOutput: '{"id":1,"title":"Updated","completed":false}' },
      { input: 'remove(1)', expectedOutput: 'undefined' },
    ],
    tags: ['NestJS', 'API', 'CRUD', 'Backend'],
  },
  {
    id: 'nextjs-data-fetching',
    title: 'Next.js Server Component Data Fetching',
    difficulty: 'Medium',
    description: `Create a Next.js Server Component that fetches and displays user data.

Requirements:
1. Fetch users from API endpoint
2. Handle loading and error states
3. Display users in a list
4. Add search functionality
5. Implement proper TypeScript types`,
    examples: [
      {
        input: 'GET /api/users',
        output: 'List of users displayed',
        explanation: 'Server component fetches and renders users',
      },
    ],
    constraints: [
      'Use async Server Component',
      'Implement proper error handling',
      'Type-safe with TypeScript interfaces',
      'Responsive design with Tailwind',
    ],
    starterCode: `'use client';

import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  // Implement data fetching and display
  
  return (
    <div>
      <h1>Users</h1>
      {/* Your implementation */}
    </div>
  );
}`,
    testCases: [
      { input: 'fetch users', expectedOutput: 'Users rendered' },
      { input: 'search by name', expectedOutput: 'Filtered results' },
      { input: 'handle error', expectedOutput: 'Error message displayed' },
    ],
    tags: ['Next.js', 'React', 'Data Fetching', 'Frontend'],
  },
  {
    id: 'jwt-auth-guard',
    title: 'Implement JWT Auth Guard',
    difficulty: 'Medium',
    description: `Create a JWT authentication guard for NestJS that:
1. Extracts token from Authorization header
2. Validates the token
3. Attaches user to request
4. Throws appropriate errors

This is a common pattern in full-stack applications for protecting routes.`,
    examples: [
      {
        input: 'Authorization: Bearer valid_token',
        output: 'true (access granted)',
        explanation: 'Valid token allows access',
      },
      {
        input: 'No authorization header',
        output: 'UnauthorizedException',
        explanation: 'Missing token denies access',
      },
    ],
    constraints: [
      'Implement CanActivate interface',
      'Use JwtService for validation',
      'Handle missing/invalid tokens',
      'Attach user to request object',
    ],
    starterCode: `import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Implement JWT validation logic
    
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // Extract Bearer token
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}`,
    testCases: [
      { input: 'valid token', expectedOutput: 'true' },
      { input: 'invalid token', expectedOutput: 'UnauthorizedException' },
      { input: 'no token', expectedOutput: 'UnauthorizedException' },
    ],
    tags: ['NestJS', 'Authentication', 'JWT', 'Security'],
  },
  {
    id: 'api-response-formatter',
    title: 'Standardized API Response Formatter',
    difficulty: 'Easy',
    description: `Create a utility class that standardizes API responses for a REST API.

Include methods for:
- Success responses with data
- Error responses with message and code
- Paginated responses with metadata

This is essential for consistent API design in full-stack applications.`,
    examples: [
      {
        input: 'ApiResponse.success({ id: 1 })',
        output: '{ success: true, data: { id: 1 }, timestamp: "..." }',
      },
      {
        input: 'ApiResponse.error("Not found", 404)',
        output: '{ success: false, error: { message: "Not found", code: 404 } }',
      },
    ],
    constraints: [
      'Use TypeScript generics',
      'Include timestamp in all responses',
      'Support pagination metadata',
      'Type-safe implementation',
    ],
    starterCode: `interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: { message: string; code: number };
  meta?: {
    timestamp: string;
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export class ApiResponseBuilder {
  static success<T>(data: T): ApiResponse<T> {
    // Implement
  }

  static error(message: string, code?: number): ApiResponse<never> {
    // Implement
  }

  static paginated<T>(
    data: T[],
    page: number,
    limit: number,
    total: number
  ): ApiResponse<T[]> {
    // Implement
  }
}`,
    testCases: [
      { input: 'success({ id: 1 })', expectedOutput: '{"success":true,"data":{"id":1}}' },
      { input: 'error("Not found", 404)', expectedOutput: '{"success":false,"error":{"message":"Not found","code":404}}' },
      { input: 'paginated([1,2,3], 1, 10, 25)', expectedOutput: '{"success":true,"data":[1,2,3],"meta":{"totalPages":3}}' },
    ],
    tags: ['TypeScript', 'API Design', 'Backend', 'Utilities'],
  },
  {
    id: 'two-sum-nested',
    title: 'Two Sum - Full Stack Variant',
    difficulty: 'Easy',
    description: `Implement Two Sum algorithm and create both NestJS API endpoint and Next.js client component.

This tests your ability to connect frontend and backend.

**Backend:** Create NestJS endpoint that accepts array and target
**Frontend:** Create Next.js component that calls the API`,
    examples: [
      {
        input: 'POST /api/two-sum { nums: [2,7,11,15], target: 9 }',
        output: '{ indices: [0, 1] }',
        explanation: 'Backend returns correct indices',
      },
    ],
    constraints: [
      'Implement efficient O(n) solution',
      'Create both backend and frontend code',
      'Handle edge cases',
      'Type-safe implementation',
    ],
    starterCode: `// Backend: NestJS Service
export class TwoSumService {
  findTwoSum(nums: number[], target: number): number[] {
    // Implement O(n) solution
  }
}

// Frontend: Next.js Component
'use client';

export function TwoSumSolver() {
  const [result, setResult] = useState<number[]>([]);
  
  const solve = async (nums: number[], target: number) => {
    // Call API and display result
  };
  
  return (
    <div>
      {/* UI implementation */}
    </div>
  );
}`,
    testCases: [
      { input: '[2,7,11,15], 9', expectedOutput: '[0,1]' },
      { input: '[3,2,4], 6', expectedOutput: '[1,2]' },
      { input: '[3,3], 6', expectedOutput: '[0,1]' },
    ],
    tags: ['Algorithm', 'NestJS', 'Next.js', 'Full Stack'],
  },
  {
    id: 'validate-parentheses-api',
    title: 'Valid Parentheses with API',
    difficulty: 'Easy',
    description: `Create a full-stack solution for the Valid Parentheses problem:

1. Implement the algorithm (stack-based)
2. Create NestJS endpoint
3. Create Next.js client with real-time validation

Tests algorithmic thinking + full-stack implementation.`,
    examples: [
      {
        input: 's = "()[]{}"',
        output: '{ valid: true }',
      },
      {
        input: 's = "(]"',
        output: '{ valid: false }',
      },
    ],
    constraints: [
      'Use stack data structure',
      'O(n) time complexity',
      'Create API endpoint',
      'Real-time validation on frontend',
    ],
    starterCode: `// Algorithm
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  // Implement stack-based solution
}

// NestJS Controller
@Controller('validate')
export class ValidateController {
  @Post('parentheses')
  validate(@Body() body: { s: string }) {
    // Return { valid: boolean }
  }
}`,
    testCases: [
      { input: '"()[]{}"', expectedOutput: 'true' },
      { input: '"(]"', expectedOutput: 'false' },
      { input: '"([])"', expectedOutput: 'true' },
      { input: '"([)]"', expectedOutput: 'false' },
    ],
    tags: ['Algorithm', 'Stack', 'NestJS', 'Next.js'],
  },
];

export const mcqQuestions = [
  {
    id: 1,
    question: 'Which decorator is used to define a GET endpoint in NestJS?',
    options: ['@Route()', '@Get()', '@Controller()', '@Api()'],
    correct: 1,
    explanation: '@Get() is the HTTP method decorator for GET requests in NestJS controllers.',
  },
  {
    id: 2,
    question: 'What is the default scope of a NestJS provider?',
    options: ['REQUEST', 'TRANSIENT', 'DEFAULT (Singleton)', 'INSTANCE'],
    correct: 2,
    explanation: 'By default, NestJS providers are singletons (DEFAULT scope).',
  },
  {
    id: 3,
    question: 'In Next.js App Router, how do you create a Server Component?',
    options: [
      'Add "use server" directive',
      'Default - no directive needed',
      'Add "use client" directive',
      'Export as async function',
    ],
    correct: 1,
    explanation: 'Components are Server Components by default in App Router. No directive needed.',
  },
  {
    id: 4,
    question: 'What does the "use client" directive do in Next.js?',
    options: [
      'Enables server-side rendering',
      'Marks component as Client Component',
      'Disables TypeScript',
      'Enables API routes',
    ],
    correct: 1,
    explanation: '"use client" marks a component as a Client Component, allowing hooks and browser APIs.',
  },
  {
    id: 5,
    question: 'Which HTTP status code indicates successful resource creation?',
    options: ['200 OK', '201 Created', '202 Accepted', '204 No Content'],
    correct: 1,
    explanation: '201 Created is returned when a resource is successfully created via POST.',
  },
  {
    id: 6,
    question: 'What is the purpose of a Guard in NestJS?',
    options: [
      'To log requests',
      'To handle errors',
      'To determine if request should be handled',
      'To transform responses',
    ],
    correct: 2,
    explanation: 'Guards determine if a request should proceed to the route handler (auth, permissions).',
  },
  {
    id: 7,
    question: 'How do you fetch data in a Next.js Server Component?',
    options: [
      'useEffect hook',
      'getServerSideProps',
      'async/await directly',
      'useSWR hook',
    ],
    correct: 2,
    explanation: 'Server Components can use async/await directly for data fetching.',
  },
  {
    id: 8,
    question: 'What is the time complexity of the Two Sum solution using a hash map?',
    options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(1)'],
    correct: 2,
    explanation: 'Using a hash map, Two Sum can be solved in O(n) time with one pass.',
  },
  {
    id: 9,
    question: 'Which TypeScript utility type makes all properties optional?',
    options: ['Required<T>', 'Partial<T>', 'Readonly<T>', 'Pick<T, K>'],
    correct: 1,
    explanation: 'Partial<T> makes all properties of T optional.',
  },
  {
    id: 10,
    question: 'What is the correct way to inject a service in NestJS?',
    options: [
      'this.service = new Service()',
      'constructor(private service: Service)',
      '@Inject(Service) service: Service',
      'Both B and C',
    ],
    correct: 3,
    explanation: 'Both constructor injection and @Inject decorator work in NestJS.',
  },
  {
    id: 11,
    question: 'In Next.js, what is the purpose of generateMetadata?',
    options: [
      'Generate API responses',
      'Create dynamic metadata for SEO',
      'Generate static pages',
      'Validate form data',
    ],
    correct: 1,
    explanation: 'generateMetadata creates dynamic metadata (title, description) for SEO.',
  },
  {
    id: 12,
    question: 'What does CORS stand for?',
    options: [
      'Cross-Origin Resource Sharing',
      'Common Origin Resource System',
      'Cross-Output Request Security',
      'Central Origin Request Service',
    ],
    correct: 0,
    explanation: 'CORS = Cross-Origin Resource Sharing, controls which domains can access resources.',
  },
  {
    id: 13,
    question: 'Which array method creates a new array with elements that pass a test?',
    options: ['map()', 'forEach()', 'filter()', 'reduce()'],
    correct: 2,
    explanation: 'filter() creates a new array with elements that pass the test function.',
  },
  {
    id: 14,
    question: 'What is the difference between PUT and PATCH?',
    options: [
      'PUT is for create, PATCH is for update',
      'PUT replaces entire resource, PATCH updates partially',
      'No difference',
      'PUT is faster',
    ],
    correct: 1,
    explanation: 'PUT replaces the entire resource, PATCH updates only specified fields.',
  },
  {
    id: 15,
    question: 'In TypeScript, what is a "union type"?',
    options: [
      'A type that combines multiple types',
      'A class that extends multiple classes',
      'A function with multiple return types',
      'An interface with multiple properties',
    ],
    correct: 0,
    explanation: 'A union type (A | B) means a value can be of type A OR type B.',
  },
  {
    id: 16,
    question: 'What is the space complexity of Kadane\'s algorithm for Maximum Subarray?',
    options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
    correct: 2,
    explanation: 'Kadane\'s algorithm uses O(1) space - only two variables (maxSum and currentSum).',
  },
  {
    id: 17,
    question: 'Which data structure is best for implementing a LIFO (Last In First Out) pattern?',
    options: ['Queue', 'Stack', 'Linked List', 'Hash Map'],
    correct: 1,
    explanation: 'A Stack follows LIFO principle - last element added is first to be removed.',
  },
  {
    id: 18,
    question: 'What is the time complexity of accessing an element in a JavaScript array by index?',
    options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
    correct: 2,
    explanation: 'Array access by index is O(1) - constant time direct memory access.',
  },
  {
    id: 19,
    question: 'In NestJS, what is the purpose of a Pipe?',
    options: [
      'To handle authentication',
      'To transform or validate input data',
      'To log requests',
      'To manage database connections',
    ],
    correct: 1,
    explanation: 'Pipes transform or validate input data before it reaches the route handler.',
  },
  {
    id: 20,
    question: 'What does the spread operator (...) do in JavaScript?',
    options: [
      'Creates a rest parameter',
      'Expands iterable elements',
      'Both A and B',
      'Creates a closure',
    ],
    correct: 2,
    explanation: 'The spread operator can expand iterables OR create rest parameters depending on context.',
  },
  {
    id: 21,
    question: 'Which method is used to add an element to the end of an array?',
    options: ['unshift()', 'push()', 'pop()', 'shift()'],
    correct: 1,
    explanation: 'push() adds elements to the end of an array and returns the new length.',
  },
  {
    id: 22,
    question: 'What is the output of: typeof null in JavaScript?',
    options: ['"null"', '"undefined"', '"object"', '"number"'],
    correct: 2,
    explanation: 'typeof null returns "object" - this is a historical JavaScript bug.',
  },
  {
    id: 23,
    question: 'In Next.js, what is revalidation?',
    options: [
      'Rebuilding the entire app',
      'Updating static content in the background',
      'Refreshing the browser',
      'Clearing the cache',
    ],
    correct: 1,
    explanation: 'Revalidation allows updating static pages in the background without rebuilding.',
  },
  {
    id: 24,
    question: 'What is the purpose of async/await in JavaScript?',
    options: [
      'To make code run faster',
      'To handle promises in a synchronous-like manner',
      'To create web workers',
      'To enable multi-threading',
    ],
    correct: 1,
    explanation: 'async/await provides cleaner syntax for handling asynchronous operations (promises).',
  },
  {
    id: 25,
    question: 'Which sorting algorithm has the best average-case time complexity?',
    options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
    correct: 2,
    explanation: 'Merge Sort has O(n log n) average-case complexity, better than O(n²) for others.',
  },
  {
    id: 26,
    question: 'What is a closure in JavaScript?',
    options: [
      'A function that has access to its outer scope',
      'A method to close database connections',
      'A way to end a loop',
      'A type of error handling',
    ],
    correct: 0,
    explanation: 'A closure is a function that remembers its lexical scope even when executed outside it.',
  },
  {
    id: 27,
    question: 'In TypeScript, what does the "?" operator mean in an interface?',
    options: [
      'The property is null',
      'The property is optional',
      'The property is private',
      'The property is readonly',
    ],
    correct: 1,
    explanation: 'The ? operator makes a property optional - it may or may not be present.',
  },
  {
    id: 28,
    question: 'What is the purpose of the @Body() decorator in NestJS?',
    options: [
      'To get URL parameters',
      'To extract request body data',
      'To get query parameters',
      'To access headers',
    ],
    correct: 1,
    explanation: '@Body() extracts and parses the request body payload.',
  },
  {
    id: 29,
    question: 'Which HTTP method is idempotent?',
    options: ['POST', 'PUT', 'PATCH', 'Both B and C'],
    correct: 3,
    explanation: 'PUT and PATCH are idempotent - multiple identical requests have the same effect as one.',
  },
  {
    id: 30,
    question: 'What is the result of: [1, 2, 3].map(x => x * 2)?',
    options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'undefined'],
    correct: 1,
    explanation: 'map() applies the function to each element: [1*2, 2*2, 3*2] = [2, 4, 6].',
  },
  {
    id: 31,
    question: 'In a binary search, what is the time complexity?',
    options: ['O(n)', 'O(n log n)', 'O(log n)', 'O(1)'],
    correct: 2,
    explanation: 'Binary search has O(log n) complexity - it halves the search space each iteration.',
  },
  {
    id: 32,
    question: 'What is the purpose of useMemo in React?',
    options: [
      'To store state',
      'To memoize expensive calculations',
      'To fetch data',
      'To handle events',
    ],
    correct: 1,
    explanation: 'useMemo memoizes expensive calculations, recomputing only when dependencies change.',
  },
  {
    id: 33,
    question: 'Which NestJS module is used for HTTP client requests?',
    options: ['@nestjs/http', '@nestjs/axios', '@nestjs/fetch', '@nestjs/client'],
    correct: 1,
    explanation: '@nestjs/axios provides the HttpModule for making HTTP requests.',
  },
  {
    id: 34,
    question: 'What does API stand for?',
    options: [
      'Application Programming Interface',
      'Advanced Protocol Integration',
      'Automated Process Interface',
      'Application Process Integration',
    ],
    correct: 0,
    explanation: 'API = Application Programming Interface - allows different software to communicate.',
  },
  {
    id: 35,
    question: 'In JavaScript, what is the difference between == and ===?',
    options: [
      'No difference',
      '=== compares type and value, == only value',
      '== is faster',
      '=== is for objects only',
    ],
    correct: 1,
    explanation: '=== (strict equality) checks both type and value, == (loose) performs type coercion.',
  },
];

export function getFullStackProblemById(id: string): Problem | undefined {
  return fullStackProblems.find((p) => p.id === id);
}
