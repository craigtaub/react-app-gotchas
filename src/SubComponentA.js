import React, { Component } from 'react';

class SubComponentA extends Component {
  shouldComponentUpdate(nextProps) {
    // return nextProps.clickProp !== this.props.clickProp; // FunctionBinding
    return nextProps.style !== this.props.style; // Literals
  }

  render() {
    console.log('render A');
    return (
      <div>
        sub compoA
      </div>
    )
  }
}

export default SubComponentA;
