import React from 'react';
import './CommentList.css';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ul className="post__comments comments-list">
    {comments.map(comment => (
      <Comment commentInfo={comment} key={comment.id} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape,
  ).isRequired,
};
