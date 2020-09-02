import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ body, name, email }) => (
  <li className="comment">
    <p>{body}</p>
    <div className="comment__author">
      <p>{name}</p>
      <a href={`mailto: ${email}`}>{email}</a>
    </div>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
