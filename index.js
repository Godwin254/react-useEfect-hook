import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import DataFetch from './components/DataFetch'


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
       < DataFetch/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
