import React, { Component, PureComponent } from 'react';


class ListOfWords extends PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
  }

  handleClick = () => {
    const words = this.state.words;
    this.setState({
      words: [
        ...words,
        'marklar'
      ]
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          add word
        </button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default WordAdder;