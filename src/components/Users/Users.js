import React, { Component } from 'react'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Users] getDerivedStateFromProps', props)
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Users] shouldComponentUpdate', nextProps)
    console.log(nextProps, nextState)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Users] getSnapshotBeforeUpdate')
    console.log(prevProps, prevState)
    return { message: 'snap' }
  }

  componentDidUpdate(prevProps, prevState, snapshoot) {
    console.log('[Users] componentDidUpdate')
    console.log(snapshoot)
  }

  render() {
    console.log('[Users] renderirng...')
    return this.props.users.map((user) => {
      return (
        <UserOutput id={user.id} key={user.id} username={user.username}>
          <UserInput
            clear={this.props.clear.bind(this, user.id)}
            remove={this.props.remove.bind(this, user.id)}
            change={(event) => this.props.change(event, user.id)}
            username={user.username}
          />
        </UserOutput>
      )
    })
  }
}

export default Persons
