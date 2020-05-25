import React, { useEffect } from 'react'

const cockpit = (props) => {
  console.log('[Cockpit] renderirng...')
  useEffect(() => {
    console.log('[Cockpit] useEffect')
    // Here we can post some data to api for example
  })
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
