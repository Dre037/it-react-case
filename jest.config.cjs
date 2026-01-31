module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^antd$': '<rootDir>/src/tests/mocks/antd.tsx',
    '^@ant-design/icons$': '<rootDir>/src/tests/mocks/icons.tsx',
    '^antd/es/typography/Title$': '<rootDir>/src/tests/mocks/typography.tsx',
    '^antd/es/typography/Text$': '<rootDir>/src/tests/mocks/typography.tsx',
    '^antd/es/typography$': '<rootDir>/src/tests/mocks/typography.tsx',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        diagnostics: false
      }
    ]
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
