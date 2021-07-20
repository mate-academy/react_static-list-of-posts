import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <>
    <span>
      <strong>{'Name: '}</strong>
      {comment.name}
    </span>
    <br />
    <span>
      <strong>{'Comment: '}</strong>
      {comment.body}
    </span>
    <br />
    <span>
      <strong>{'Email: '}</strong>
      {comment.email}
    </span>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
