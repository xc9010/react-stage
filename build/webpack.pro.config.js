const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');


const pro = Object.assign({}, baseConfig, {
  mode: 'production',  // 和开发环境下的配置只是修改了 mode
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minimize&modules&importLoaders=1&localIdentName=[path]__[local]-[hash:base64:5]!postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ].concat(
    process.env.NODE_ENV === 'analysis' ? new BundleAnalyzerPlugin() : []
  ),

  resolve: {
    extensions: ['.js', '.jsx'],
  },
});

module.exports = pro
