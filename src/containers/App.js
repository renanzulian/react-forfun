import React, { Component } from "react";
import "./App.css";
import Users from '../components/Users/Users'

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        username: "Example",
      },
    ],
    showOutputs: false,
  };

  userHandler = (event, idUser) => {
    const currentStateUsers = [...this.state.users];
    const idUserWanted = currentStateUsers.findIndex(
      (user) => user.id === idUser
    );
    const userWanted = { ...currentStateUsers[idUserWanted] };
    userWanted.username = event.target.value;
    currentStateUsers[idUserWanted] = userWanted;
    const newStateUser = currentStateUsers;
    this.setState({
      users: newStateUser,
    });
  };

  toggleOutputHandler = () => {
    const currentState = this.state.showOutputs;
    this.setState({
      showOutputs: !currentState,
    });
  };

  addNewUser = () => {
    const newId = this.state.users.reduce((curr, prev) => {
      return curr.id > prev.id ? curr.id : prev.id;
    }, 0);
    const newUser = { id: newId + 1, username: "New User" };
    const newStateUser = [...this.state.users, newUser];
    this.setState({
      users: newStateUser,
    });
  };

  removeUser = (idUser) => {
    const newStateUser = this.state.users.filter((user) => user.id !== idUser);
    this.setState({
      users: newStateUser,
    });
  };

  clearUser = (idUser) => {
    console.log(idUser);
    const currentStateUsers = [...this.state.users];
    const idUserWanted = currentStateUsers.findIndex(
      (user) => user.id === idUser
    );
    const userWanted = { ...currentStateUsers[idUserWanted] };
    userWanted.username = "";
    currentStateUsers[idUserWanted] = userWanted;
    const newStateUser = currentStateUsers;
    this.setState({
      users: newStateUser,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>I'm the App Component</h1>
        <button className="button" onClick={this.toggleOutputHandler}>
          {" "}
          Show/Hide{" "}
        </button>
        {this.state.showOutputs ? (
          <div>
            <Users 
              users={this.state.users}
              remove={this.removeUser}
              clear={this.clearUser}
              change={this.userHandler} />
          </div>
        ) : null}
        <button className="button" onClick={this.addNewUser}>
          New User
        </button>
      </div>
    );
  }
}

export default App;
