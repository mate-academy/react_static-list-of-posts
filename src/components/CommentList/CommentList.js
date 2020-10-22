import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  comments.map(comment => (
    <Comment comment={comment} key={comment.id} />
  ))
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default CommentList;
