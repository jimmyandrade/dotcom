module.exports = {
  coverageDirectory: "../../coverage/apps/dotcom",
  displayName: "dotcom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
};
