module.exports = {
  collectCoverageFrom: ['src/**/**/**/*.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
  testPathIgnorePatterns: ['.*\\.integration\\.test\\.js$'],
};
