import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ commentsList }) => (
  <>
    {commentsList.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </>
);

CommentList.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
