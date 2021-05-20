import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <div className="Comment">
    <div>{`Name: ${name}`}</div>
    <a href={`mailto:${email}`}>{email}</a>
    <div>{body}</div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
