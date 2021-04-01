import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comment }) => (
  <ul>
    {comment.map(comments => (
      <li key={comments.id}>
        <Comment {...comments} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
