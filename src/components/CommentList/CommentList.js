import React from 'react';
import propTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentList = props => (
  <ul>
    {props.comment.map(comment => (
      <Comment comment={comment} />
    ))}
  </ul>
);
CommentList.propTypes = {
  comment: propTypes.shape({
    map: propTypes.func.isRequired,
  }).isRequired,
};

export default CommentList;
