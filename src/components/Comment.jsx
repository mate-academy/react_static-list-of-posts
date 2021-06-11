/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ postId, newComment }) => {
  if (postId === newComment.id) {
    return (
      <ul>
        <li>Name: {newComment.name}</li>
        <li>Body: {newComment.body}</li>
        <li>Email: {newComment.email}</li>
      </ul>
    );
  }

  return null;
};

Comment.propTypes = {
  postId: PropTypes.number.isRequired,
  newComment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
