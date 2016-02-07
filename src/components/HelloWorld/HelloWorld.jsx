import React from 'react';

var HelloWorld = React.createClass({

  handleClick: function(e) {

  },
  render: function() {
    return (
      <div>
      <h1>Hello {this.props.name}!</h1>
        <button className="btn btn-primary" id="some-btn" onClick={this.handleClick} >Button</button>
      </div>
    );
  }
});

export default HelloWorld;
