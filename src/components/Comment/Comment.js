import React from 'react';

import './Comment.css';
import { CommentType } from '../Types';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <div className="commentName">{name}</div>
    <div className="commentEmail">{email}</div>
    <div className="commentBody">{body}</div>
  </div>
);

Comment.propTypes = CommentType;
