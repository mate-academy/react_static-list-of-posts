import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <>
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
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
