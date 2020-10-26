import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p className="comment__name">{name}</p>
    <p className="comment__description">{body}</p>
    <p className="comment__email">{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
