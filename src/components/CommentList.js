import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentList({ comments }) {
  return comments.map(item => <Comment key={item.id} comment={item} />);
}

Comment.propTypes = {
  comments: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentList;
