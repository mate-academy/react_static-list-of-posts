import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div>
    <h3>{name}</h3>
    <p>{body}</p>
    <p className="email">{`${email} - left comment `}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
