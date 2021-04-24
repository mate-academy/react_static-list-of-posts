import React from 'react';
import PropTypes from 'prop-types';
import { TypeComment } from './TypeComment';
import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(TypeComment.isRequired).isRequired,
};
