import React from 'react';
import { CommentType } from '../../Typedefs';

export const Comment = ({ comment }) => (
  <div>
    <h3>
      {comment.name}
    </h3>
    <p>
      {comment.body}
    </p>
    <p>
      {comment.email}
    </p>
  </div>
);

Comment.propTypes = {
  comment: CommentType.isRequired,
};
