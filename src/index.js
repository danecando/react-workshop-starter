require('babel-polyfill');
require('./styles/main');

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
