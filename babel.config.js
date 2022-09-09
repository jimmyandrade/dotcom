module.exports = (api) => {
  api.cache(true);
  return {
    "babelrcRoots": ["*"],
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react", {
          "runtime": "automatic"
        }
      ],
      "@babel/preset-typescript"
    ],
    plugins: []
  };
};
