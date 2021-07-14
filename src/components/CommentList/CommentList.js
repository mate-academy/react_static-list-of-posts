import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { CommentType } from '../../types';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map((comment, i) => (
      <li key={comment.id}>
        <p>
          {i + 1}
          .
        </p>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
