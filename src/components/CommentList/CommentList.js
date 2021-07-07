import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = (props) => {
  const { comments } = props;

  return (
    comments.map(currentComment => (
      <Comment comment={currentComment} />
    ))
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
