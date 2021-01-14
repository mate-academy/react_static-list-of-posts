import React from 'react';
import { typeComment } from '../../types';

const Comment = ({ comment }) => (
  <>
    <li>
      <span>{comment.name}</span>
      <br />
      <span>
        Author:
        {' '}
        {comment.email}
      </span>
      <p>{comment.body}</p>
    </li>
  </>
);

Comment.propTypes = typeComment;

export default Comment;
