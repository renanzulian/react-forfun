import React from 'react'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>
        Component ID: <strong>{props.id}</strong>
      </p>
      <p>{props.username || 'It does not has content'}</p>
      <div>{props.children || 'It does not has input'}</div>
      <small>UserOutput element</small>
    </div>
  )
}

export default userOutput
