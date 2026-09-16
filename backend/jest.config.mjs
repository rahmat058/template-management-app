/** @type {import('jest').Config} */
export default {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/types/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  roots: ['<rootDir>/test', '<rootDir>/src'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
}
