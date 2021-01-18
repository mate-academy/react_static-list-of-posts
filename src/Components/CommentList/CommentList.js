import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { CommentTypes } from '../../types';

export const CommentList = ({ comments }) => (
  <ol>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ol>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
};
