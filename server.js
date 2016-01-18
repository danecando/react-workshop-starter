'use strict';

var browserSync = require('browser-sync');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

var options = {
    quiet: false,
    hot: true,
    inline: true,
    historyApiFallback: true,
    lazy: false,
    publicPath: config.output.publicPath,
    stats: true
};

browserSync({
  server: {
    baseDir: 'public',
    middleware: [
      require('connect-history-api-fallback')(),
      require('webpack-dev-middleware')(compiler, options),
      require('webpack-hot-middleware')(compiler)
    ],
  },
  files: [
    'public/assets/images/**/*',
    'public/assets/fonts/**/*',
    'public/assets/css/**/*.css'
  ]
});
