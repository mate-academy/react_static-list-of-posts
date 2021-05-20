import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <>
    <span><strong>{name}</strong></span>
    <br />
    <span>{email}</span>
    <br />
    <span className="text">{body}</span>
    <br />
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
