import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <ul className="comments-list">
    <li className="comments-list__item">
      <p>
        <strong>Name:</strong>
        {' '}
        {name}
      </p>
      <p>
        <strong>Body:</strong>
        {' '}
        {body}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {email}
      </p>
      <hr />
    </li>
  </ul>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
