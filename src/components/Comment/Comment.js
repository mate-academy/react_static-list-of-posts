import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

export const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <li className="сomment">
      <span className="сomment__name">{`${name} (${email})`}</span>
      <p className="сomment__body">{body}</p>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
