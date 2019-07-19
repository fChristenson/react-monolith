const path = require("path");
const Html = require("html-webpack-plugin");
const excludes = require("./excludes");

module.exports = {
  entry: path.resolve(__dirname, "src", "public", "main.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  module: {
    rules: [
      ...excludes.rules,
      {
        test: /\.tsx?/,
        exclude: (filePath) => {
          return /node_modules/.test(filePath) || (excludes.regex && excludes.regex.test(filePath));
        },
        include: path.resolve(__dirname, "src", "public"),
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new Html({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "public", "index.html")
    })
  ]
};
