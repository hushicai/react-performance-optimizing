import React, { Component } from 'react';
import List from './List';

class A extends Component {
  state = {
    title: 'default'
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: 'refreshed'
      });
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <List />
      </div>
    );
  }
}

export default A;
