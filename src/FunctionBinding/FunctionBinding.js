import React, { Component } from 'react';
import FSubComponentA from './FSubComponentA';
import FSubComponentB from './FSubComponentB';

class FunctionBinding extends Component {

  constructor() {
    super();
    this.state = {
      value: true
    };
    this.toggleState = this.toggleState.bind(this);
    this.doSomethingTwo = this.doSomethingTwo.bind( this );

  }
  doSomething() {
    console.log('ran doSomething');
  }

  doSomethingTwo() {
    console.log('ran doSomethingTwo');
  }

  toggleState() {
    this.setState({
      value: !this.state.value
    });
  }

  /*
    React will trigger a re-render anytime a prop (or state) value is not equal to the previous value.

    SO: passing inline bound function (including ES6 arrow functions)
    - essentially passing a new function for each render of the parent component
    INSTEAD: handle function binding in the constructor and pass the already bound function as the prop value
  */
  render() {
    console.log('FunctionBinding render');
    return (
      <div className="App">
        <h1>FunctionBinding</h1>
        Value: { (this.state.value) ? 'true' : 'false' }  <br/>
        <b><a onClick={ this.toggleState }>Toggle state</a></b>
        <FSubComponentA clickProp={ () => this.doSomething() }>Bad</FSubComponentA>
        <FSubComponentB clickProp={ this.doSomethingTwo }>Good</FSubComponentB>
      </div>
    );
  }
}

export default FunctionBinding;
