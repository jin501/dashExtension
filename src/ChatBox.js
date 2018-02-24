import React, { Component } from 'react';
import './ChatBox.css';
import ChatWindow from './ChatWindow.js';
import InputBar from './InputBar.js';

class ChatBox extends Component {
  constructor(){
    super();
    this.state = {
      // [{bot:}{you:}]
      chatHistory: ['Welcome! tell me something'],
      userInput: '',
      botResponse: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    var userInput = event.target.value;
    this.setState({userInput: userInput})
  }

  handleSubmit(event) {
    event.preventDefault();
    // if(this.state.chatBot){
    // }
    //make api call to back end to send user input data
    //set the state
    this.state.chatHistory.push(this.state.userInput)
    this.setState({chatHistory: this.state.chatHistory, userInput: '', chatBot: !this.state.chatBot})
  }

  render() {
    return (
      <div className="ChatBox">
        <ChatWindow
          botResponse={this.state.botResponse}
          chatHistory={this.state.chatHistory}
        />
        <InputBar

          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          userInput={this.state.userInput}
        />
      </div>
    );
  }
}

export default ChatBox;
