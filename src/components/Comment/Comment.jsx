import React from 'react';
import { CommentTypes } from '../../default';

export const Comment = ({ name, body, email}) => (
  <>
    <li className="comment__name">{name}</li>
    <li className="comment__body">{body}</li>
    <li className="comment__email">{email}</li>
  </>
);

Comment.propTypes = CommentTypes;
