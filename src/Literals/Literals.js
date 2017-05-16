import React, { Component } from 'react';
import LSubComponentA from './LSubComponentA';
import LSubComponentB from './LSubComponentB';
import LSubComponentC from './LSubComponentC';

class Literals extends Component {

  constructor() {
    super();
    this.state = {
      value: true
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({
      value: !this.state.value
    });
  }

  /*
    Object literals or Array literals are functionally equivalent to calling Object.create() or new Array().

    SO: if object/array literals are passed as prop values, React will consider these to be new values for each render.
    BEST: declare outside component.
  */
  style = { backgroundColor: 'red' }; // BEST
  render() {
    console.log('Literals render');
    // this.style = { backgroundColor: 'red' }; // BAD: RE-RENDER EVERYTIME ASWELL..same issue. Literal.

    //LSubComponentC with style={ { backgroundColor: 'red' } } will re-render each time too. PureComponent wont save.

    return (
      <div className="App">
        <h1>Literals</h1>
        <b><a onClick={ this.toggleState }>Toggle state</a></b>
        <LSubComponentA style={ { backgroundColor: 'red' } }>Bad</LSubComponentA>
        <LSubComponentB style={ this.style }>Good B</LSubComponentB>
        <LSubComponentC style={ this.style }>Good C</LSubComponentC>
      </div>
    );
  }
}

export default Literals;
