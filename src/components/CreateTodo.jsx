import React from 'react';

var CreateTodos = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    };
  },
  render: function() {
    return (
      <div className="create-todo row">
        <input id="name" name="name" value={this.state.text} onChange={this.handleInput} />
        <button className="add-todo btn btn-primary">Add Todo</button>
      </div>
    );
  }
});

export default CreateTodos;
