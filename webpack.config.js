const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['babel-preset-es2015'].map(require.resolve)
      }
    } 
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename:'./index.css',
    }),
    new HtmlWebpackPlugin({
      title: 'Insert Your Arbitrary Title Here',
      filename: 'index.html',
      template: 'main.html',
      minify: {removeComments:true, collapseWhitespace: true, collapseInlineTagWhitespace: true}
    }),
    new OptimizeCssAssetsPlugin()
  ]
}