import React, { Component } from 'react';

class SubComponentB extends Component {
  shouldComponentUpdate(nextProps) {
    // return nextProps.clickProp !== this.props.clickProp; // FunctionBinding
    return nextProps.style !== this.props.style; // Literals
  }

  render() {
    console.log('render B');
    return (
      <div>
        sub compoB
      </div>
    )
  }
}

export default SubComponentB;
