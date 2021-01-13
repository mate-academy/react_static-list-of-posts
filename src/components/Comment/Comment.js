import React from 'react';

import { CommentShape } from '../shapes/CommentShape';
import './Comment.scss';

export const Comment = ({ body, email, name }) => (
  <>
    <hr />
    <p>{body}</p>
    <div className="comment__user">
      <span>{name}</span>
      <span>{email}</span>
    </div>
  </>
);

Comment.propTypes = CommentShape;
