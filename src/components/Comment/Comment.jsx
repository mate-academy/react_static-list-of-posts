import React from 'react';
import { CommentTypes } from '../../default';

export const Comment = ({ name, body, email, id }) => (
  <>
    <li key={id} className="comment__name">{name}</li>
    <li key={id} className="comment__body">{body}</li>
    <li key={id} className="comment__email">{email}</li>
  </>
);

Comment.propTypes = CommentTypes;
