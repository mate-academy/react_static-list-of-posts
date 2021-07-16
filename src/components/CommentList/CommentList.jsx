import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { commentType } from '../type';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentType).isRequired,
};
