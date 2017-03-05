const { resolve, join } = require('path');
const webpack = require('webpack');
// const babel

module.exports = {
  target: 'web',
  devtool: 'cheap-eval-source-map',
  entry: [
    // 'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    './render.jsx',
  ],
  output: {
    filename: 'render.bundle.js',
    path: resolve(__dirname, '../dist/static'),
    publicPath: '/'
  },
  context: resolve(__dirname, '../src'),
  resolve: {
    //modules: [resolve(__dirname, 'node_modules')],
    // moduleExtensions: ['-loader'],
    extensions: ['.jsx', '.js', '.json'],
  },
  /*
  resolveLoader: {
    modules: [resolve(__dirname, '../node_modules')],
    moduleExtensions: ['-loader'],
    extensions: ['.jsx', '.js', '.json'],
    // modules: [resolve(__dirname, '../node_modules')],
    // modules: ['../node_modules'],
  },
  */
  plugins: [
    //new webpack.ContextReplacementPlugin(/load-runner/, /^\.\//),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(),
  ],

  /*
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'static'),
    // match the output path

    publicPath: resolve(__dirname, '/'),
    // match the output `publicPath`
  },
  */

  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        // include: [resolve(__dirname, '../src')],
        use: [
          {
            // enforce: 'pre',
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2', 'react-hmre'],
              // plugins: ['react-hmre']
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        // include: [resolve(__dirname, '../src')],
        use: [
          {
            // enforce: 'pre',
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2', 'react-hmre'],
              // plugins: ['react-hmre']
            },
          },
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ],
  },
};

// export default config;
