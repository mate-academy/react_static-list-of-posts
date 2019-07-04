import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <Comment comm={comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOff({
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentList;
