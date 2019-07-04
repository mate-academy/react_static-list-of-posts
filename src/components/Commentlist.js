import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = props => (
  <>
    <h5> comments:</h5>
    {props.comments.map(comment => (
      <Comment comment={comment} />
    ))}
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object])).isRequired,
};

export default CommentList;
