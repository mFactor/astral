const { resolve } = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: 'cheap-eval-source-map',
  entry: [
    './server.js'
  ],
  output: {
    filename: 'server.js',
    path: resolve(__dirname, './dist'),
  },
  // context: resolve(__dirname, '.'),
  //resolve: {
    // modules: [resolve(__dirname, './node_modules')],
    //moduleExtensions: ['-loader'],
    //extensions: ['.jsx', '.js', '.json'],
  //},
  /*
  resolveLoader: {
    // modules: [resolve(__dirname, './node_modules')],
    // modules: [resolve(__dirname, '../node_modules')],
    // modules: ['../node_modules'],
  },
  */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.node'],
  },
  watch: true,
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    noParse: /aws\-sdk/,
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        // include: [resolve(__dirname, './src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }], 'react', 'stage-2'],
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        //include: [resolve(__dirname, './src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }], 'react', 'stage-2'],
            },
          },
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ],
  },
};
