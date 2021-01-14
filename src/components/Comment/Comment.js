import React from 'react';

import { CommentType } from '../types/CommentType';
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

Comment.propTypes = CommentType;
