import React from 'react';
import { CommentType } from './PropTypes';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <p>
      {`"${body}"`}
    </p>
    <h5>
      {name}
    </h5>
    <p>
      {email}
    </p>
  </div>
);

Comment.propTypes = CommentType.isRequired;
