import React from 'react'

const cockpit = (props) => {
  console.log('[Cockpit] renderirng...')
  return (
    <div>
      <h1>{props.title}</h1>
      <button className="button" onClick={props.showHide}>
        Show/Hide
      </button>
      <button className="button" onClick={props.newUser}>
        New User
      </button>
    </div>
  )
}

export default cockpit
