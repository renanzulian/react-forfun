import React, { Component } from 'react'

class UserInput extends Component {
  render() {
    console.log('[UserInput.js] rendering ...');
    return (
      <div className="UserInput">
        <div className="edition-session">
          <button onClick={this.props.clear} className="button-clear">
            C
          </button>
          <button onClick={this.props.remove} className="button-remove">
            R
          </button>
        </div>
        <input type="text" onChange={this.props.change} value={this.props.username} />
        <small>UserInput element</small>
      </div>
    )
  }
}

export default UserInput
