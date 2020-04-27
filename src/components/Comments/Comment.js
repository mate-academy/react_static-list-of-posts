import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <li className="comments__item">
    <p className="comment__title">Comment</p>
    <p>
      Name:
      {' '}
      {name}
    </p>
    <p>
      Email:
      {' '}
      {email}
    </p>
    <p>
      Text:
      {' '}
      {body}
    </p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
