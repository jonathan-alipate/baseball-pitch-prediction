const path = require('path');

module.exports = {
  entry: './src/public/train.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/public'),
  },
};