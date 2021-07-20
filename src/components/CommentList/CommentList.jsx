import React from 'react';
import PropTypes from 'prop-types';
import { Comment, CommentTypes } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentTypes),
  ).isRequired,
};
