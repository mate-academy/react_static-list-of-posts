import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (comments.map(comment => (
  <Comment
    key={comment.id}
    name={comment.name}
    body={comment.body}
    email={comment.email}
  />
)));

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
