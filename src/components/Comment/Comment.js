import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <span>{name}</span>
    <span>{`Email: ${email}`}</span>
    <p>{`Comment: ${body}`}</p>
  </>
);

export const commentShape = PropTypes.shape({
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});

Comment.propTypes = { ...commentShape };
