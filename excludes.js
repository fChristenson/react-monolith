const path = require("path");

const nullLoader = (regex) => {
  return {
    test: (filePath) => {
      return new RegExp(regex).test(filePath);
    },
    exclude: /node_modules/,
    include: path.resolve(__dirname, "src", "public"),
    loader: "null-loader"
  };
};

module.exports = {
  rules: [
    process.env.EXCLUDE && nullLoader(process.env.EXCLUDE)
  ].filter(r => !!r),
  regex: process.env.EXCLUDE && new RegExp(process.env.EXCLUDE)
}
