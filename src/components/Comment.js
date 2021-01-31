import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ id, name, email, body }) => (
  <>
    {`Comment ${id}: ${name}, From: ${email}`}
    {' '}
    <br />
    {`Body: ${body}`}
  </>
);

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
