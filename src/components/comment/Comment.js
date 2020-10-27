import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

export const Comment = ({ body, name, email, id }) => (
  <li className="comment" key={id}>
    <p className="comment__name">
      {name}
      :
    </p>
    <p className="comment__email">{email}</p>
    <p className="comment__text">{body}</p>
  </li>
);

Comment.propTypes = CommentShape;
