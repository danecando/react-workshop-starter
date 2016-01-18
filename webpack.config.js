const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.BABEL_ENV = process.env.NODE_ENV || 'development';

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  context: __dirname,
  stats: {
    colors: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    cached: true,
    cachedAssets: true
  },
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public/assets'),
    publicPath: '/assets',
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.css', '.js', '.json'],
    root: ['./src/styles/globals']
  },

  plugins: [
    new webpack.DefinePlugin({
      '__DEV__': ENV === 'development',
      '__TEST__': ENV === 'test',
      '__CLIENT__': JSON.stringify(true),
      'process.env': {
        'NODE_ENV': JSON.stringify(ENV),
        'BABEL_ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        include: path.join(__dirname, 'src/styles'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?importLoaders=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
      },
      {
        test: /\.(scss|css)$/,
        exclude: path.join(__dirname, 'src/styles'),
        loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true!toolbox-loader'
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  toolbox: {
    theme: './src/styles/custom/_theme.scss'
  },
  postcss: [
    autoprefixer({ browsers: AUTOPREFIXER_BROWSERS })
  ]
};
