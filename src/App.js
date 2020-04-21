import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    username: 'Greatest Developer',
    showOutputs: false,
    users: [1, 2, 3, 4]
  }
  
  userHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  toggleOutputHandler = () => {
    const currentState = this.state.showOutputs
    this.setState({
      showOutputs: !currentState
    })
  }

  render() {
    return (
    <div className="App"> 
      <h1>I'm the App Component</h1>
      <UserInput content={this.state.username} change={this.userHandler} click={this.toggleOutputHandler} />
      {
        this.state.showOutputs ?
        <div>
          {
            this.state.users.map(user => {
              return <UserOutput identity={user} key={user} content={this.state.username} />
            })
          }
        </div> : null
      }
      
    </div>
    )
  }
  
}

export default App;
