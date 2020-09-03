import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <li className="comment" key={comment.id}><Comment {...comment} /></li>
    ))}
  </ul>
);

CommentList.prototype = {
  comments: PropTypes.array.isRequired,
  comment: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
