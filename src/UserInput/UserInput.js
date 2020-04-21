import React from 'react'

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={props.change} value={props.content}/>
            <button onClick={props.click} > Show/Hide </button>
            <small>UserInput element</small>
        </div>
    )
}

export default userInput

