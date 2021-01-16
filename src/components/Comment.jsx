import React from 'react';
import { CommentType } from '../types';

const Comment = ({ name, body, email }) => (
  <>
    <p className="comment__title">{name}</p>
    <p>{body}</p>
    <a href="mailto:">{email}</a>
  </>
);

Comment.propTypes = CommentType.isRequired;

export default Comment;
