import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';

export const Comment = ({ name, body, email }) => (
  <>
    <h3>{name}</h3>
    <p>{body}</p>
    <p>{email}</p>
  </>
);

export const commentPropTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Comment.propTypes = commentPropTypes;
