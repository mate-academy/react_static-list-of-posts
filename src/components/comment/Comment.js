import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

export function Comment({ body, name }) {
  return (
    <li className="comment">
      <p className="comment__user-name">
        {name}
        :
      </p>
      <p className="comment__text">{body}</p>
    </li>
  );
}

Comment.propTypes = CommentShape;
