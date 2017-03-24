import React, { Component } from 'react';
import FunctionBinding from './FunctionBinding/FunctionBinding';
import Literals from './Literals/Literals';

class App extends Component {

  render() {
    console.log('App render');
    return (
      <div className="App">
        <FunctionBinding>FunctionBinding</FunctionBinding>
        <Literals>Literals</Literals>
      </div>
    );
  }
}

export default App;
