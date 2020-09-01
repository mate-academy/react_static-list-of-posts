import React from 'react';
import './Comment.scss';
import { CommentShape } from '../Shape';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <p className="comment__author">
      {`Comment by: ${name}`}
    </p>
    <p className="comment__email">
      {`Email: ${email}`}
    </p>
    <p className="comment__text">{body}</p>
  </div>

);

Comment.propTypes = CommentShape;
