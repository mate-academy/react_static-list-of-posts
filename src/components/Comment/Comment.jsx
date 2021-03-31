import React from 'react';
import { CommentType } from '../../types';
import './comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <div className="userInfo">
      <p>
        <strong>User:</strong>
        {' '}
        {name}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {email}
      </p>
    </div>
    <p className="subtitle is-4">{body}</p>
  </div>
);

Comment.propTypes = CommentType.isRequired;
