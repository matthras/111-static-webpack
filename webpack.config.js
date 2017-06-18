const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['./main.js', './main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js",
    publicPath: '/'
  },
  module: {
    rules: [
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename:'./index.css',
    }),
    new HtmlWebpackPlugin({
      title: 'Insert Your Arbitrary Title Here',
      filename: 'index.html',
      template: 'main.html',
      minify: {}
    }),
    new OptimizeCssAssetsPlugin()
  ]
}