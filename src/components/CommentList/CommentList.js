import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';

import { Comment } from '../Comment/Comment';

export function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
