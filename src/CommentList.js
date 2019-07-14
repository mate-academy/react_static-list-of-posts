import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <p>
    {comments.map(comment => <Comment commentData={comment} />)}
  </p>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object])).isRequired,
};

export default CommentList;
