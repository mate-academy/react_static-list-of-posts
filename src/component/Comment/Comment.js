import React from 'react';
import './Comment.scss';
import { CommentShape } from '../propTypes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h4 className="comment__title">
      {name.toUpperCase()}
    </h4>

    <p className="comment__body">
      {body}
    </p>

    <span>
      {email}
    </span>
  </div>
);

Comment.propTypes = CommentShape.isRequired;
