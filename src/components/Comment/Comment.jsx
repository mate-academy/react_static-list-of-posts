import React from 'react';
import './Comment.scss';
import { CommentType } from '../../types';

export function Comment({ comment }) {
  const { name, body, email} = comment

  return (
    <div className ="comment">
      <h3>
        Comment
      </h3>

      <p>Username: {name}</p>
      <p>Message: {body}</p>
      <p>Email: {email}</p>
    </div>
  )
}

Comment.propTypes = CommentType.isRequired;
