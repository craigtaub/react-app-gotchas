import React, { Component } from 'react';

class FSubComponentB extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.clickProp !== this.props.clickProp; // FunctionBinding
  }

  render() {
    console.log('F render B');
    return (
      <div>
        Fsub compoB
      </div>
    )
  }
}

export default FSubComponentB;
