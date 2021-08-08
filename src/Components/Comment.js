import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <li>
    <div>
      {name}
    </div>
    <div>
      {body}
    </div>
    <div>
      {email}
    </div>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
