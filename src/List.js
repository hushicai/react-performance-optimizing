import React, {Component, PureComponent} from 'react';

const data = new Array(100).fill(0).map((v, i) => {
  return {
    text: i
  };
});

class List extends Component {
  render() {
    return (
      <ul>
        {data.map(listItem =>
          <li key={listItem.text}>
            <Button text={listItem.text} onClick={() => alert(listItem.text)} />
          </li>
        )}
      </ul>
    );
  }
}

class Button extends PureComponent {
  render() {
    return (
      <button {...this.props}>{this.props.text}</button>
    );
  }
}


export default List;