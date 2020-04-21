import React from 'react'

const userInput = (props) => {
    return (
        <div className="UserInput">
            <p>Component ID: <strong>{props.identity}</strong></p>
            <input type="text" onChange={props.change} value={props.content}/>
            <small>UserInput element</small>
        </div>
    )
}

export default userInput

