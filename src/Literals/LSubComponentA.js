import React, { Component } from 'react';

class LSubComponentA extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.style !== this.props.style; // Literals
  }

  render() {
    console.log('L render A');
    return (
      <div>
        L sub compoA
      </div>
    )
  }
}

export default LSubComponentA;
