import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import './CommentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul className="comment-list">
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
