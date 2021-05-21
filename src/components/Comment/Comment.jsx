import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ email, name, body }) => (
  <div className="comment">
    <p>
      Name:
      {' '}
      {name}
    </p>
    <p>
      {email}
    </p>
    <p>
      {body}
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
