import React, { Component } from 'react'

class UserOutput extends Component {
  componentWillUnmount() {
    console.log(`[UserOutput.js] user ${this.props.id} saying bye ....`)
  }

  render() {
    console.log('[UserOutput.js] rendering ....')
    return (
      <div className="UserOutput">
        <p>
          Component ID: <strong>{this.props.id}</strong>
        </p>
        <p>{this.props.username || 'It does not has content'}</p>
        <div>{this.props.children || 'It does not has input'}</div>
        <small>UserOutput element</small>
      </div>
    )
  }
}

export default UserOutput
