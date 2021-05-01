import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <div className="Comment">
    <h3>
      <span>{name}</span>
    </h3>

    <p>
      <span>{body}</span>
    </p>

    <p>
      <span>{email}</span>
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
