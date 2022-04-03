const path = require('path');

module.exports = {
  entry: './src/barChart.js',
  output: {
    filename: 'barChart.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'barChart',
      type: 'umd'
    }
  }
};
