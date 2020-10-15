import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
