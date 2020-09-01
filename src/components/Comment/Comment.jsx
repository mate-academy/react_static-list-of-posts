import React from 'react';
import './Comment.scss';
import { CommentShape } from '../Shape';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <p>
      <strong>
        {`Comment by: ${name}`}
      </strong>
    </p>
    <p>{`Email: ${email}`}</p>
    <p className="comment__text">{body}</p>
  </div>

);

Comment.propTypes = CommentShape;
