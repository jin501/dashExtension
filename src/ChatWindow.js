import React, { Component } from 'react';
import './ChatBox.css';

export default class ChatWindow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    // let chat = this.props.chatHistory.map((response, i)=>{
    //   if(i%2==0){
    //     return <li className="Bot">Bot: {response}</li>
    //   }else{
    //     return <li className="Human">You: {response}</li>
    //   }
    // })
    // let chat = this.props.chatHistory.map((response)=>{
    //   return <li className="Human">You: {response}</li>
    // })
    let chat = Object.keys(this.props.chatHistory).map((key, i)=>{
      if(i%2==0){
        return <li className="Bot">Bot: {this.props.chatHistory[key]}</li>
          }else{
            return <li className="Human">You: {this.props.chatHistory[key]}</li>
      }
    })


    return (
      <div className="ChatWindow">
        {chat}
      </div>
    );
  }
}
