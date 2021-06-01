module.export = {
  automock: false, //DEFAULT
  bail: 0, //DEFAULT
  cacheDirectory: '/tmp/<path>', //DEFAULT
  clearMocks: false, //DEFAULT
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: '__COVERAGE__',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/**/*',
    '<rootDir/build/**/*',
  ],
  coverageProvider: ['babel'], //DEFAULT
  // coverageReporters:
  coverageThreshold: undefined, //DEFAULT
  dependencyExtractor: undefined, //DEFAULT
  displayName: {
    name: 'Mean Webpack',
    color: 'yellow',
  },
  errorOnDeprecated: true,
  extraGlobals: undefined, //DEFAULT
  forceCoverageMatch: [''], //DEFAULT
  globals: {
    APP_CONFIG: {
      api: {
        url: 'http://localhost:5000',
        token: null,
      },
    },
  },
  globalSetup: undefined, //DEFAULT no function needs to be run at setup
  globalTeardown: undefined, //DEFAULT no function needs to be run at teardown
  haste: undefined, //DEFAULT no need to configure the default crawler
  injectGlobals: true, //DEFAULT simplifies imports
  maxConcurrency: 10,
  notify: false,
  slowTestThreshold: 2,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost:5000',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(js?(x)|ts?(x))',
    '<rootDir>/src/**/?(*.)(spec|test).(js?(x)|ts?(x))',
  ], // SAME AS TEST REGEX
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/node_modules/jest-css-modules-transform',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/fileTransform.js',
  },
  testTimeout: 5000,
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
}
