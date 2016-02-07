import React from 'react';
import Header from './Header';
import CreateTodo from './CreateTodo';
import Todos from './Todos';

var App = React.createClass({
  getInitialState: function() {
    return {
      name: ''
    };
  },
  handleInput: function(e) {
    this.setState({
      name: e.target.value
    });
  },
  render: function() {
    return (
      <div className="container">
        <Header />
        <div className="page row">
          <CreateTodo />
          <Todos />
        </div>
        <footer className="footer row">

        </footer>
      </div>
    );
  }
});

export default App;
