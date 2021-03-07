import PropTypes from 'prop-types';
import React from 'react';

export default function Comment({ name, body, email }) {
  return (
    <li>
      <h3>
        {name}
      </h3>
      <p>
        {body}
      </p>
      <a href={`malito:${email}`}>
        {email}
      </a>
    </li>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
