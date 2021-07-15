import React from 'react';
import { CommentTypes } from '../../propTypes/types';

export function Comment({ name, body, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
      <div>
        <strong>Email:</strong>
        {' '}
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
}

Comment.propTypes = CommentTypes;
