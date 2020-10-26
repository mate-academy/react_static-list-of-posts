import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

export function Comment({ body, name, email }) {
  return (
    <li className="comment">
      <p className="comment__name">
        {name}
        :
      </p>
      <p className="comment__email">{email}</p>
      <p className="comment__text">{body}</p>
    </li>
  );
}

Comment.propTypes = CommentShape;
