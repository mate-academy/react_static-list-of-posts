import React from 'react';
import { PropTypes } from 'prop-types';
import { Comment } from './Comment';

export function CommentList({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
