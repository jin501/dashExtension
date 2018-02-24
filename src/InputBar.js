import React, { Component } from 'react';
import './InputBar.css';

class InputBar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    // debugger;
    return (
      <form className="InputBar" onSubmit={this.props.handleSubmit}>
        <input
          className="Input"
          command="command"
          value={this.props.userInput}
          placeholder="say something.."
          onChange={this.props.handleChange}
        />
        <input
          className="Button"
          value="send"
          type="submit"
        />
      </form>
    );
  }
}

export default InputBar;
