module.exports = {
  verbose: true,
  testURL: 'http://localhost',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
