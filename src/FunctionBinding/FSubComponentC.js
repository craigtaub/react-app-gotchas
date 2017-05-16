import React, { Component } from 'react';

class FSubComponentC extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.clickProp !== this.props.clickProp; // FunctionBinding
  }

  render() {
    console.log('F render C');
    return (
      <div>
        Fsub compoC
      </div>
    )
  }
}

export default FSubComponentC;
