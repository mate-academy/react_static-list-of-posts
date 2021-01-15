import React from 'react';
import { typeComment } from '../../types';

const Comment = ({ name, email, body }) => (
  <>
    <li>
      <span>{name}</span>
      <br />
      <span>
        Author:
        {' '}
        {email}
      </span>
      <p>{body}</p>
    </li>
  </>
);

Comment.propTypes = typeComment;

export default Comment;
