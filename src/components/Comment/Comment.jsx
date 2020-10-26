import React from 'react';
import { CommentShape } from '../../shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <div className="comments__item">
    <p className="comments__name">
      {name}
    </p>
    <p className="comments__email">
      {`Email: ${email}`}
    </p>
    <p className="comments__body">
      {body}
    </p>
  </div>
);

Comment.propTypes = CommentShape;
