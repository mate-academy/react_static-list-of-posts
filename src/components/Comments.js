import React from 'react';
import { CommentShape } from './shapes/CommentShape';

export const Comments = ({ name, body, email }) => (
  <div className="comments">
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

Comments.propTypes = CommentShape;
