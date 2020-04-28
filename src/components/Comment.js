import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, email, body }) => (
  <p>
    <span>{name}</span>
    <a href={`mailto:${email}`}>{email}</a>
    <span>{body}</span>
  </p>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
