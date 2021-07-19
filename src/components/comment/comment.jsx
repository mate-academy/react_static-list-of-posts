import React from 'react';
import PropTypes from 'prop-types';
import './comment.scss';

export const Comment = ({ comment }) => (
  <>
    <p>{`Name: ${comment.name}`}</p>
    <p>{comment.body}</p>
    <p>{`Email: ${comment.email}`}</p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
