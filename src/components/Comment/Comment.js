import React from 'react';
import { CommentType } from '../Types/Type';

const Comment = ({ name, body, email }) => (
  <li>
    <span>
      {name}
    </span>
    <a href="mailto:{email}">
      {email}
    </a>
    <p>
      {body}
    </p>
  </li>
);

Comment.propTypes = CommentType.isRequired;

export default Comment;
