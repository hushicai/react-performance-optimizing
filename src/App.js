import React, { Component, PureComponent } from 'react';

class A extends Component {
  state = {
    value: 1
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: 2
      });
    }, 5000);
  }
  render() {
    return (
      <div className="App">
        <h1>A</h1>
        <B1 value={this.state.value} />
        <B2 />
      </div>
    );
  }
}

class B1 extends Component {
  render() {
    return (
      <div className="b1">
        <h2>B1</h2>
        <C1 />
        <C2 value={this.props.value} />
      </div>
    );
  }
}

class B2 extends PureComponent {
  render() {
    return (
      <div className="b2">
        <h2>B2</h2>
        <C3 />
      </div>
    );
  }
}

class C1 extends PureComponent {
  render() {
    return (
      <div className="c1">
        <h3>C1</h3>
      </div>
    );
  }
}

class C2 extends Component {
  render() {
    return (
      <div className="c2">
        <h3>C2</h3>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

class C3 extends PureComponent {
  render() {
    return (
      <div className="c3">
        <h3>C3</h3>
      </div>
    );
  }
}

export default A;
