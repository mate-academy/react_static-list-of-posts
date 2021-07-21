import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <>
    <h4>{name}</h4>
    <p>{body}</p>
    <a href={`mailto:${email}`}>{email}</a>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
