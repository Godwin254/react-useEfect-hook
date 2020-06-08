import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import HookFetch from './components/HookFetch'


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
       <HookFetch/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
