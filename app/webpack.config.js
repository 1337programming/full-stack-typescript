var autoprefixer = require('autoprefixer');
var path = require('path');
var WebpackBrowserPlugin = require('webpack-browser-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/polyfills.ts', './src/main.ts', 'webpack/hot/dev-server'],
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'babel?presets[]=es2015!ts'
      },
      {test: /\.css$/, loader: 'css-loader!postcss-loader'},
      {test: /\.svg$/, loader: "url-loader?limit=100000" }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [new WebpackBrowserPlugin(), new HtmlWebpackPlugin({template: 'src/index.html'})],
  output: {
    path: 'dist',
    filename: 'bundle.js'
  }
};
