import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

export const Comment = ({ name, email, body }) => (
  <div>
    <p>
      <b>User</b> : {name}
    </p>
    <p>Email:
      <em>
        <a href={email}> {email}</a>
      </em>
    </p>
    <p>{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
