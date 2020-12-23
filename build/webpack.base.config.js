const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
    // vendor: [
    //   'react-router',
    //   'react-router-dom',
    // ]
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
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
};
