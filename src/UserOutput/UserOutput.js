import React from 'react'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Component ID: <strong>{props.identity}</strong></p>
            <p>{props.content || 'It does not has content'}</p>
            <small>UserOutput element</small>
        </div>
    )
}

export default userOutput

