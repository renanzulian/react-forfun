import React from 'react'

const userInput = (props) => {
    return (
        <div className="UserInput">
            <div className="edition-session">
                <button onClick={props.clear} className="button-clear">C</button>
                <button onClick={props.remove} className="button-remove">R</button>
            </div>
            <input type="text" onChange={props.change} value={props.username}/>
            <small>UserInput element</small>
        </div>
    )
}

export default userInput

