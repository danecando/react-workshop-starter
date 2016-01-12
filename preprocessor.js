const path = require('path');
const hook = require('css-modules-require-hook');
const sass = require('node-sass');

hook({
  extensions: ['.scss'],
  preprocessCss: (data, file) => {
    if (data.indexOf('@import "~_globals.scss";') !== -1) {
      data = data.replace('@import "~_globals.scss";', '@import "' + path.join(__dirname, 'src/styles/globals/_globals.scss') + '";');
    }
    return sass.renderSync({ file, data, includePaths: [path.join(__dirname, 'src/styles'), path.join(__dirname, 'node_modules')] }).css
  }
});
