import React from 'react';
import { CommentShape } from '../shapes/CommentShape';
import './Comment.scss';

export const Comment = ({ body, name, email }) => (
  <>
    <div className="comment__name">
      {name}
    </div>
    <div className="comment__text">
      {body}
    </div>
    <div className="comment__email">
      {email}
    </div>
  </>
);

Comment.propTypes = CommentShape;
