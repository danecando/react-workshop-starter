var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  context: __dirname,
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public/assets/js'),
    publicPath: '/assets/js',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
