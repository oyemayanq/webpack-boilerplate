const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  //devTool: "source-maps",

  devServer: {
    static: "./dist",
    hot: true,
    client: {
      logging: "none",
    },
    port: 3000,
  },
};
