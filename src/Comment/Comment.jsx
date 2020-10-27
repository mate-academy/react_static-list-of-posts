import React from 'react';
import { CommentShape } from '../Shapes/CommentShape';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <div className="comment__name">{name}</div>
    <div className="comment__body">
      <strong>{body}</strong>
    </div>
    <div className="comment__email">{email}</div>
  </div>
);

Comment.propTypes = CommentShape;
