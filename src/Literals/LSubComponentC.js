import React, { PureComponent } from 'react';

class LSubComponentB extends PureComponent {
  render() {
    console.log('L render C');
    return (
      <div>
        L sub compoC
      </div>
    )
  }
}

export default LSubComponentB;
