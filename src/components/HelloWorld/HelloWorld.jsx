import React, { Component } from 'react';
import style from './style';

class HelloWorld extends Component {
  render() {
    return (
      <div className="container">
        <h1 className={style.title}>Hello World</h1>
      </div>
    );
  }
}

export default HelloWorld;
