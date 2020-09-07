import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <h4>{name}</h4>
    <p>{body}</p>
    <span>
      <strong>Email: </strong>
      {email}
    </span>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
