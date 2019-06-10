import React from 'react';
import User from "./User";
import { users } from "./users";
import CommentList from "./CommentList";

export default function Post(props) {

  const {title, text, id} = props;
  const listOfUsers = users.find(user => user.id === id);

  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
      <User
        name={listOfUsers.name}
        email={listOfUsers.email}
        address={listOfUsers.address.street}
      />
      <CommentList id={id}/>
    </article>
  );
}
