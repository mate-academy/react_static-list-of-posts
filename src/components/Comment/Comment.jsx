import React from 'react';
import './Comment.scss';
import { CommentShape } from '../Shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <div className="comment-list__comment comment">
    <div className="comment__title">
      {name}
    </div>

    <a href={`mailto:${email}`} className="comment__user-email">
      {email}
    </a>

    <p className="comment__text">
      {body}
    </p>
  </div>
);

Comment.propTypes = CommentShape;
