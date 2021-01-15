import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <p className="comment__body">{body}</p>
    <div className="comment__author">
      Email:
      {email}
      <br />
      User:
      {name}
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
