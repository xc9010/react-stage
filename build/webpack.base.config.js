const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happypack');
const cpuCount = require('os').cpus().length;

const happyPackPool = HappyPack.ThreadPool({ size: cpuCount - 1 });


module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
    vendor: [
      'react-router',
      // 'antd',
    //   'react-router-dom',
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css'],
  },
  externals: {
    react: 'window.React',
    antd: 'window.antd',
    'react-dom': 'window.ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[name]-[hash].css',
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyPackPool,
      loaders: ['babel-loader?cacheDirectory=true'],
    }),
    new HappyPack({
      id: 'styles',
      threadPool: happyPackPool,
      loaders: [
        'style-loader',
        'css-loader?modules&localIdentName=[local]-[hash:base64:5]',
      ],
    }),
  ],
};
