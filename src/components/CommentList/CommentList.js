import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { TypeComment } from '../../types';

export const CommentList = ({ comments }) => (
  <div>
    <h3>Comments:</h3>
    {comments.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(TypeComment).isRequired,
};
