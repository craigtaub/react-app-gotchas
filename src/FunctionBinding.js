import React, { Component } from 'react';
import SubComponentA from './SubComponentA';
import SubComponentB from './SubComponentB';

class FunctionBinding extends Component {

  constructor() {
    super();
    this.state = {
      tree: true
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
      tree: !this.state.tree
    });
  }

  /*
    React will trigger a re-render anytime a prop (or state) value is not equal to the previous value.

    SO: passing inline bound function (including ES6 arrow functions)
    - essentially passing a new function for each render of the parent component
    INSTEAD: handle function binding in the constructor and pass the already bound function as the prop value
  */
  render() {
    console.log('NewApp render');
    return (
      <div className="App">
        hello: { (this.state.tree) ? 'true' : 'false' } <br/>
        <a onClick={ this.toggleState }>Toggle</a>
        <SubComponentA clickProp={ () => this.doSomething() }>Bad</SubComponentA>
        <SubComponentB clickProp={ this.doSomethingTwo }>Good</SubComponentB>
      </div>
    );
  }
}

export default FunctionBinding;
