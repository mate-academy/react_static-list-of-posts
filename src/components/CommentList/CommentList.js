import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';

import { Comment } from '../Comment/Comment';

export function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
