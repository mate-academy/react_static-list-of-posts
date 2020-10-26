import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="item__block">
    <h2 className="item__block--name">{name}</h2>
    <p className="item__block--email">
      {`email: ${email}`}
    </p>
    <p className="item__block--body">
      {body}
    </p>
  </div>
);

Comment.propTypes = CommentShape;
