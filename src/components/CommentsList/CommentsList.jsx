import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentsList = ({ comments }) => (
  <ul className="list">
    {comments.map(comment => (
      <li className="list__item item">
        <Comment
          key={comment.id}
          {...comment}
        />
      </li>
    ))}
  </ul>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      postId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
