import React from 'react';
import './Comment.scss';

import { CommentShape } from '../shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h4 className="comment__name">{name}</h4>
    <p className="comment__body">{body}</p>
    <p className="comment__email">{email}</p>
  </div>
);

Comment.propTypes = CommentShape;
