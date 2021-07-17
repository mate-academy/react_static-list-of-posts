import React from 'react';
import propTypes from 'prop-types';

import { Comment } from '../Comment';

export function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
};
