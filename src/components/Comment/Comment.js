import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <li>
      <div className="notification is-link">
        <h4>{name}</h4>
        <p>{body}</p>
        <p>{email}</p>
      </div>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
