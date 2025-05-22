const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_, argv) => ({
  target: "web",
  mode: argv.mode || "production",
  devtool: "source-map",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["module:metro-react-native-babel-preset"],
            plugins: ["react-native-web"],
          },
        },
      },
      {
        test: /\.jsx?$/i,
        include: [path.resolve(__dirname, "node_modules", "@react-navigation")],
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  resolve: {
    alias: {
      "react-native$": "react-native-web",
    },
    extensions: [".web.js", ".web.jsx", ".js", ".jsx"],
  },
  devServer: {
    allowedHosts: "all",
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
  },
});
