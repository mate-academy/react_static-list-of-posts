import React from 'react';
import { commentShape } from '../../types';

export const Comment = ({ comment }) => (
  <li className="Comment message is-dark is-small">
    <div className="message-body">
      <p>
        <strong>{comment.name}</strong>
        <br />
        {comment.email}
        <br />
        <em>{comment.body}</em>
      </p>
    </div>
  </li>
);

Comment.propTypes = {
  comment: commentShape.isRequired,
};
