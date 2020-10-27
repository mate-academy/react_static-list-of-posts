import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <li className="comment__block">
    <h2 className="comment__block_name">{name}</h2>
    <p className="comment__block_email">
      {`email: ${email}`}
    </p>
    <p className="comment__block_body">
      {body}
    </p>
  </li>
);

Comment.propTypes = CommentShape;
