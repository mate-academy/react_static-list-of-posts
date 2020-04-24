import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  comments.map(item => <Comment key={item.id} {...item} />)
);

Comment.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CommentList;
