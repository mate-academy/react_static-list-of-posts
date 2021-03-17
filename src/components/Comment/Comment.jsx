import React from 'react';
import { CommentType } from '../../types';

export const Comment = ({ name, body, email }) => (
  <>
    <h3>{name}</h3>
    <p>{body}</p>
    <p>
      <span role="img" aria-label="person emodji">👤: </span>
      {' '}
      <b>
        commented:
      </b>
      {' '}
      {email}
    </p>
  </>
);

Comment.propTypes = CommentType;
