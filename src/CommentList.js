import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';
import { CommentType } from './types';

export const CommentList = ({ comments }) => (
  <div>
    <h3>Comments:</h3>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
