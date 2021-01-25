import React from 'react';
import './Comment.scss';

import { CommentType } from '../../types';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p>{name}</p>
    <p>{body}</p>
    <p>{email}</p>
  </div>
);

Comment.propTypes = CommentType;
