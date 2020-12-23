const path = require('path');


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
    extensions: ['.js', '.jsx'],
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
};
