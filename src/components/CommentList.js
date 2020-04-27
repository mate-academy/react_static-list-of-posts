import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ item }) => (
  item.comment.map(comm => (
    <Comment comm={comm} key={comm.id} />
  ))
);

CommentList.propTypes = {
  item: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentList;
