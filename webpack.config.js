module.exports = {
  mode: "development",
  entry: "./src/Index.tsx",
  output: {
    filename: "./bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      }
    ]
  }
};
