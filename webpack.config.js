const path = require("path");

module.exports = {
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
    ],
  },

  //devTool: "source-maps",

  devServer: {
    static: "./dist",
  },
};
