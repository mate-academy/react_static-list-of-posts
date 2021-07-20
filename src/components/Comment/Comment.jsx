import React from 'react';
import PropTypes from 'prop-types';

import './comment.scss';

export function Comment({ name, email, body }) {
  return (
    <>
      <div className="comment__container">
        <h4 className="comment__title">{name}</h4>
        <p className="comment__email">{email}</p>
      </div>
      <p className="comment__text">{body}</p>
    </>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
