import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ul className="comment-list">
    {comments.map(comment => (
      <li className="comment-input" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>

);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
