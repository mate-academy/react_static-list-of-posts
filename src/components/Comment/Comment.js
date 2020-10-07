import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export function Comment({ name, email, body }) {
  return (
    <div className="border_style_dotted">
      <div className="comment-title">{name}</div>
      <div>{body}</div>
      <div align="right">{email}</div>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
