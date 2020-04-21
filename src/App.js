import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    username: 'Greatest Developer'
  }
  
  userHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
    <div className="App"> 
      <h1>I'm the App Component</h1>
      <UserInput content={this.state.username} change={this.userHandler}/>
      <UserOutput identity="1" content={this.state.username} />
      <UserOutput identity="2" content={this.state.username} />
      <UserOutput identity="3" content={this.state.username} />
    </div>
    )
  }
  
}

export default App;
