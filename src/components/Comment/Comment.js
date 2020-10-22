import React from 'react';
import { CommentPropTypes } from '../propTypes/CommentPropTypes';
import './Comment.scss';

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

Comment.propTypes = CommentPropTypes;
