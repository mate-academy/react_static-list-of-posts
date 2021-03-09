import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <li className="Comment">
      {name}
      <br />
      {email}
      <br />
      {body}
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
