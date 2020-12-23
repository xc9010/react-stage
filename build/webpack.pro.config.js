const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');


module.exports = Object.assign({}, baseConfig, {
  mode: 'production',  // 和开发环境下的配置只是修改了 mode
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ].concat(
    process.env.NODE_ENV === 'analysis' ? new BundleAnalyzerPlugin() : []
  ),

  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },
});
