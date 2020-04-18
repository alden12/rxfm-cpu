const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.ts",
    output: {
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: [".ts", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader",
          exclude: '/node_modules/'
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
          exclude: '/node_modules/'
        },
      ]
    },
    plugins: [new HtmlWebpackPlugin()]
  }
];
