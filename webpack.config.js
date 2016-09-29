var path = require('path');

module.exports = [
  {
    entry: './client/index',

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './public'),
    },

    module: {
      loaders: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
      ],
    },

    devtool: 'source-map',
  },
];
