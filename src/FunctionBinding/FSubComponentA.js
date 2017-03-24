import React, { Component } from 'react';

class FSubComponentA extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.clickProp !== this.props.clickProp; // FunctionBinding
  }

  render() {
    console.log('F render A');
    return (
      <div>
        Fsub compoA
      </div>
    )
  }
}

export default FSubComponentA;
