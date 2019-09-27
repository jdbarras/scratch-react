const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'react-svg-loader'
      },
      {
        test: /\.png$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'public/dist/'),
    publicPath: 'dist/',
    filename: 'bundle.js'
  }
};
