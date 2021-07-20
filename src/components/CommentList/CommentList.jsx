import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentShape } from '../Shapes';

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
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
