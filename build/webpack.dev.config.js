const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.config');


module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  // devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],

  devServer: {
    host: '0.0.0.0',
    contentBase: [path.join(__dirname, './')],
    port: 8028,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/mock/1367': {
        // target: 'http://api-doc.dotfashion.cn',   //'http://192.168.1.159:9111' ,
        // secure: false,
        // changeOrigin: true,
      }
    },
    // open: true
  }
});
