import React from 'react';
import { users } from '../users';
import User from './User';
import CommentList from './CommentList';

export default function Post(props) {
  const postsAuthor = users.find(user => user.id === props.userId);

  return (
    <div key={props.title}>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <User name={postsAuthor.name} email={postsAuthor.email} address={postsAuthor.address['city']} />
        <CommentList id={props.id} />
    </div>
  );
}
