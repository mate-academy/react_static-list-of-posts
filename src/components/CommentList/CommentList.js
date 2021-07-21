import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ul className="posts__comments-list">
    Comments:
    { comments.map(comment => (
      <li className="posts__comment" key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
