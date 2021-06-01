const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/pixsy.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'), // (name of current directory, ie. projects/app/assets/js and create the bundle file there)
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};