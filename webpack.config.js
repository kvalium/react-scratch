const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const DotEnvPlugin = require('dotenv-webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    publicPath: '/',
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },
  entry: './src/index.jsx',
  plugins: [
    new DotEnvPlugin(),
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      title: 'React from scratch!',
      inject: 'body',
    }),
    // new BundleAnalyzerPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
              ],
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel',
            ],
          },
        },
      },
      {
        test: /\.(s|a)css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
