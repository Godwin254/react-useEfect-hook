import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import HookMouse from './components/HookMouse'


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <HookMouse/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
