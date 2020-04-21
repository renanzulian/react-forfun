import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    users: [{
      id: 1,
      username: 'Example'
    }],
    showOutputs: false,
  }
  
  userHandler = (event, idUser) => {
    const currentStateUsers = [ ...this.state.users ]
    const idUserWanted = currentStateUsers.findIndex(user => user.id === idUser)
    const userWanted = { ...currentStateUsers[idUserWanted] }
    userWanted.username = event.target.value
    currentStateUsers[idUserWanted] = userWanted
    const newStateUser = currentStateUsers
    this.setState({
      users: newStateUser
    })
  }

  toggleOutputHandler = () => {
    const currentState = this.state.showOutputs
    this.setState({
      showOutputs: !currentState
    })
  }

  addNewUser = () => {
    const newId = this.state.users.reduce((curr, prev) => {
      return curr.id > prev.id ? curr.id : prev.id
    }, 0)
    const newUser =  { id : newId+1, username: 'New User'}
    const newStateUser = [ ...this.state.users, newUser ]
    this.setState({
      users: newStateUser
    })
  }

  removeUser = (idUser) => {
    const newStateUser = this.state.users.filter(user => user.id !== idUser)
    this.setState({
      users: newStateUser
    })
  }

  clearUser = (idUser) => {
    console.log(idUser)
    const currentStateUsers = [ ...this.state.users ]
    const idUserWanted = currentStateUsers.findIndex(user => user.id === idUser)
    const userWanted = { ...currentStateUsers[idUserWanted] }
    userWanted.username = ''
    currentStateUsers[idUserWanted] = userWanted
    const newStateUser = currentStateUsers
    this.setState({
      users: newStateUser
    })
  }

  render() {
    return (
    <div className="App"> 
      <h1>I'm the App Component</h1>
      <button className="button" onClick={this.toggleOutputHandler} > Show/Hide </button>
      {
        this.state.showOutputs ?
        <div>
          {
            this.state.users.map(user => {
              return <UserOutput id={user.id} key={user.id} username={user.username}>
                <UserInput 
                clear={this.clearUser.bind(this, user.id)} 
                remove={this.removeUser.bind(this, user.id)}
                change={(event) => this.userHandler(event, user.id)} username={user.username} />
              </UserOutput>
            })
          }
        </div> : null
      }
      <button className="button" onClick={this.addNewUser}>
        New User
      </button>
    </div>
    
    )
  }
  
}

export default App;
