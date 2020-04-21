import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    user: {
      id: 1,
        content: 'This is the element 1'
    }
  }
  
  userHandler = (event) => {
    this.setState({
      user: {
        id: 1,
        content: event.target.value
      }
    })
  }

  render() {
    return (
    <div className="App"> 
      <h1>I'm the App Component</h1>
      <UserOutput identity={this.state.user.id} content={this.state.user.content}>
        <UserInput identity={this.state.user.id} 
        content={this.state.user.content} change={this.userHandler} />
      </UserOutput>
    </div>
    )
  }
  
}

export default App;
