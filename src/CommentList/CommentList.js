import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment/Comment';

const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default CommentList;
