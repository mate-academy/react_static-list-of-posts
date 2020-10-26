import React from 'react';
import { CommentShape } from '../Shapes/CommentShape';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <div className="comment-name">{name}</div>
    <div className="comment-body">
      <strong>{body}</strong>
    </div>
    <div className="comment-email">{email}</div>
  </div>
);

Comment.propTypes = CommentShape;
