import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentList.scss';

export function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)).isRequired,
};
