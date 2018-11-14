import React, {Component, PureComponent} from 'react';

const data = new Array(100).fill(0).map((v, i) => {
  return {
    text: i
  };
});

class List extends Component {
   // Each instance of SomeComponent has a cache of click handlers
  // that are unique to it.
  clickHandlers = {};

  // Generate and/or return a click handler,
  // given a unique identifier.
  getClickHandler(key) {

    // If no click handler exists for this unique identifier, create one.
    if (!Object.prototype.hasOwnProperty.call(this.clickHandlers, key)) {
      this.clickHandlers[key] = () => alert(key);
    }
    return this.clickHandlers[key];
  }

  render() {
    return (
      <ul>
        {data.map(listItem =>
          <li key={listItem.text}>
            <Button text={listItem.text} onClick={this.getClickHandler(listItem.text)} />
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