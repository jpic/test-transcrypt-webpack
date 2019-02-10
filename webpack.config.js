const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
const extractSass = new ExtractTextPlugin({
  filename: 'output.css',
});

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./main.js', './main.scss'],
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'blog/static')
  },
  entry: './webpack_entry.py',
  output: {
    filename: 'todos.js',
    path: path.resolve(__dirname, 'todos/static')
  },
  module: {
    rules: [
      {
        test: /\.py$/,
        loader: 'py-loader',
        options: {
          compiler: 'transcrypt'
        }
      }
    ]
  },
  plugins: [
    extractSass
  ]
};
