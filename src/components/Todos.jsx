import React from 'react';

var Todos = React.createClass({
  render: function() {
    return (
      <div className="todo row">
        <div class="col-md-4">
          <button id="toggle" className="btn btn-primary">Toggle</button>
        </div>
        <div className="col-md-8">
          <div className="todo-text">{this.props.text}</div>
      </div>
      </div>
    );
  }
});

export default Todos;
