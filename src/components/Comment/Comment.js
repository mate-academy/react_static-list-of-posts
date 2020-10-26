import React from 'react';
import { CommentShape } from '../shapes/CommentShape';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <p className="comments-list__name">
      {name}
    </p>
    <p className="comments-list__body">
      {body}
    </p>
    <p className="comments-list__email">
      {email}
    </p>
  </>
);

Comment.propTypes = CommentShape;
