import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <li className="comment__block block">
    <h2 className="block__name">{name}</h2>
    <p className="block__email">
      {`email: ${email}`}
    </p>
    <p className="block_body">
      {body}
    </p>
  </li>
);

Comment.propTypes = CommentShape;
