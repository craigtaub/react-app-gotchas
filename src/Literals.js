import React, { Component } from 'react';
import SubComponentA from './SubComponentA';
import SubComponentB from './SubComponentB';

class Literals extends Component {

  constructor() {
    super();
    this.state = {
      tree: true
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({
      tree: !this.state.tree
    });
  }

  /*
    Object literals or Array literals are functionally equivalent to calling Object.create() or new Array().

    SO: if object/array literals are passed as prop values, React will consider these to be new values for each render.
    BEST: declare outside component.
  */
  style = { backgroundColor: 'red' }; // BEST
  render() {
    console.log('NewApp render');
    // this.style = { backgroundColor: 'red' }; // BAD: RE-RENDER EVERYTIME ASWELL..same issue. Literal.

    return (
      <div className="App">
        hello: { (this.state.tree) ? 'true' : 'false' } <br/>
        <a onClick={ this.toggleState }>Toggle</a>
        <SubComponentA style={ { backgroundColor: 'red' } }>Bad</SubComponentA>
        <SubComponentB style={ this.style }>Good</SubComponentB>
      </div>
    );
  }
}

export default Literals;
