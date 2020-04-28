import React from "react";
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const persons = (props) =>
  props.users.map((user) => {
    return (
      <UserOutput id={user.id} key={user.id} username={user.username}>
        <UserInput
          clear={props.clear.bind(this, user.id)}
          remove={props.remove.bind(this, user.id)}
          change={(event) => props.change(event, user.id)}
          username={user.username}
        />
      </UserOutput>
    );
  });

export default persons;
