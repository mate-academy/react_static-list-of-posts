import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';
import { commentShape } from '../shapes/commentShape';

export const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>

);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentShape).isRequired,
};
