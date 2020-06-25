import React from 'react';

import { ShapeComment } from '../Shapes';

export const Comment = ({ comment }) => (
  <li className="comment">
    <p className="comment__name">
      {comment.name}
    </p>

    <a href={`mailto:${comment.email}`} className="comment__email">
      {comment.email}
    </a>

    <p className="comment__text">
      {comment.body}
    </p>
  </li>
);

Comment.propTypes = ShapeComment.isRequired;
