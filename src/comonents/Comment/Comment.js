import React from 'react';
import { CommentType } from '../types';

export const Comment = ({ name, body, email }) => (
  <li className="post__comment comment">
    <h3 className="comment__name">
      {name}
    </h3>

    <p className="comment__text">
      {body}
    </p>

    <a
      className="comment__email"
      href={`mailto:${email}`}
    >
      {email}
    </a>

  </li>
);

Comment.propTypes = CommentType.isRequired;
