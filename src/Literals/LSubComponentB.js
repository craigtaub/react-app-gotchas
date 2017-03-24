import React, { Component } from 'react';

class LSubComponentB extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.style !== this.props.style; // Literals
  }

  render() {
    console.log('L render B');
    return (
      <div>
        L sub compoB
      </div>
    )
  }
}

export default LSubComponentB;
