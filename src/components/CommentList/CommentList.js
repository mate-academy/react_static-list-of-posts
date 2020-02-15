import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ allComments }) => (
  <div className="comment-list">
    <h2 className="comment-list__title">Comments:</h2>
    {allComments.map(comment => (
      <Comment key={comment.id} commentInfo={comment} />
    ))}
  </div>
);

CommentList.propTypes = {
  allComments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
