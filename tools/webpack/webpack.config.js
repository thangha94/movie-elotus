const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    static: {
      publicPath: '/'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      API_V4_AUTH: JSON.stringify('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmFkZjA4MjA1NWJlZmVjOWEzOTMzYWZlZDFkNWVmOSIsInN1YiI6IjYzZjhkMTc5M2Q3NDU0MDA3YzAxNjAxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYkzkei-CyNI-Wj_eyFD7aDq2TnDLJ2nBJCE-0sjy0s')
    })
  ],
};
