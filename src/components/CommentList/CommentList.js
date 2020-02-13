import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

export const CommentList = ({ comments }) => (
  <div className="comment__wrapper">
    {comments.map(comment => (
      <Comment
        {...comment}
        key={comment.id}
      />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};
