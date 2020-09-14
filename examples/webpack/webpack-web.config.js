// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-webpack
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: './src/index.ts',
  // Uncomment the following line to enable source map
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'LoopBack',
  },
};
