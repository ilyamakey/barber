const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    main: [
      './src/index.js',
      './src/index.sass'
    ]
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },

  watch: true,
  // target: 'node', // ignore built-in modules like path, fs, etc.

  // externals: [nodeExternals()],

  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?url=false', 'postcss-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
     filename: '[name].css'
    })
  ]
}
