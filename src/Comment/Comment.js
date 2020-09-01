import React from 'react';
import { CommentShape } from '../PropTypes';

import './Comment.css';

export const Comment = ({ name, body, email }) => (
  <>
    <h4 className="comment-heading">
      {`${name}, ${email}`}
    </h4>
    <p className="comment-text">{body}</p>
  </>
);

Comment.propTypes = CommentShape;
