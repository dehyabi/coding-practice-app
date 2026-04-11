import { Problem } from '@/types';

export const problems: Problem[] = [
  // Fundamentals
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1]',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    starterCode: `function twoSum(nums: number[], target: number): number[] {
  // Write your solution here
  
}

// Test your solution
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]`,
    testCases: [
      { input: '[2,7,11,15], 9', expectedOutput: '[0,1]' },
      { input: '[3,2,4], 6', expectedOutput: '[1,2]' },
      { input: '[3,3], 6', expectedOutput: '[0,1]' },
      { input: '[-1,-2,-3,-4,-5], -8', expectedOutput: '[2,4]' },
      { input: '[0,4,3,0], 0', expectedOutput: '[0,3]' },
    ],
    tags: ['Array', 'Hash Table'],
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    description: `Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      {
        input: 's = "()[]{}"',
        output: 'true',
      },
      {
        input: 's = "(]"',
        output: 'false',
      },
      {
        input: 's = "([])"',
        output: 'true',
      },
    ],
    constraints: [
      '1 <= s.length <= 10^4',
      's consists of parentheses only \'()[]{}\'',
    ],
    starterCode: `function isValid(s: string): boolean {
  // Write your solution here
  
}

// Test your solution
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true`,
    testCases: [
      { input: '"()[]{}"', expectedOutput: 'true' },
      { input: '"(]"', expectedOutput: 'false' },
      { input: '"([])"', expectedOutput: 'true' },
      { input: '"([)]"', expectedOutput: 'false' },
      { input: '"{[]}"', expectedOutput: 'true' },
    ],
    tags: ['String', 'Stack'],
  },
  {
    id: 'merge-sorted-array',
    title: 'Merge Sorted Array',
    difficulty: 'Easy',
    description: `You are given two integer arrays \`nums1\` and \`nums2\`, sorted in **non-decreasing order**, and two integers \`m\` and \`n\`, representing the number of elements in \`nums1\` and \`nums2\` respectively.

**Merge** \`nums1\` and \`nums2\` into a single array sorted in **non-decreasing order**.`,
    examples: [
      {
        input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
        output: '[1,2,2,3,5,6]',
        explanation: 'The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6].',
      },
      {
        input: 'nums1 = [1], m = 1, nums2 = [], n = 0',
        output: '[1]',
      },
    ],
    constraints: [
      'nums1.length == m + n',
      'nums2.length == n',
      '0 <= m, n <= 200',
      '1 <= m + n <= 200',
      '-10^9 <= nums1[i], nums2[j] <= 10^9',
    ],
    starterCode: `function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  // Write your solution here
  
}

// Test your solution
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]`,
    testCases: [
      { input: '[1,2,3,0,0,0], 3, [2,5,6], 3', expectedOutput: '[1,2,2,3,5,6]' },
      { input: '[1], 1, [], 0', expectedOutput: '[1]' },
      { input: '[0], 0, [1], 1', expectedOutput: '[1]' },
      { input: '[1,2,4,0,0,0], 3, [3,5,6], 3', expectedOutput: '[1,2,3,4,5,6]' },
    ],
    tags: ['Array', 'Two Pointers', 'Sorting'],
  },
  {
    id: 'max-subarray',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return *its sum*.

The test cases are generated so that the answer will fit in a **32-bit integer**.`,
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: 'The subarray [4,-1,2,1] has the largest sum 6.',
      },
      {
        input: 'nums = [1]',
        output: '1',
      },
      {
        input: 'nums = [5,4,-1,7,8]',
        output: '23',
      },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
    ],
    starterCode: `function maxSubArray(nums: number[]): number {
  // Write your solution here
  
}

// Test your solution
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23`,
    testCases: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', expectedOutput: '6' },
      { input: '[1]', expectedOutput: '1' },
      { input: '[5,4,-1,7,8]', expectedOutput: '23' },
      { input: '[-2,-1]', expectedOutput: '-1' },
      { input: '[-1,-2,-3]', expectedOutput: '-1' },
    ],
    tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
  },
  {
    id: 'palindrome-number',
    title: 'Palindrome Number',
    difficulty: 'Easy',
    description: `Given an integer \`x\`, return \`true\` *if* \`x\` *is a* ***palindrome****, and* \`false\` *otherwise*.

An integer is a **palindrome** when it reads the same backward as forward.`,
    examples: [
      {
        input: 'x = 121',
        output: 'true',
        explanation: '121 reads as 121 from left to right and from right to left.',
      },
      {
        input: 'x = -121',
        output: 'false',
        explanation: 'From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.',
      },
      {
        input: 'x = 10',
        output: 'false',
        explanation: 'Reads 01 from right to left. Therefore it is not a palindrome.',
      },
    ],
    constraints: [
      '-2^31 <= x <= 2^31 - 1',
    ],
    starterCode: `function isPalindrome(x: number): boolean {
  // Write your solution here
  
}

// Test your solution
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false`,
    testCases: [
      { input: '121', expectedOutput: 'true' },
      { input: '-121', expectedOutput: 'false' },
      { input: '10', expectedOutput: 'false' },
      { input: '0', expectedOutput: 'true' },
      { input: '12321', expectedOutput: 'true' },
    ],
    tags: ['Math'],
  },
  // Full Stack (NestJS + Next.js)
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

export function getProblemById(id: string): Problem | undefined {
  return problems.find((p) => p.id === id);
}

export function getProblemsByDifficulty(difficulty: string): Problem[] {
  if (difficulty === 'All') return problems;
  return problems.filter((p) => p.difficulty === difficulty);
}
