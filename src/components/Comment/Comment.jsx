import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export function Comment({ email, name, body }) {
  return (
    <div className="comment">
      <p>
        User
        <span className="comment__user-mail">
          {` ${email} `}
        </span>
        replied:
      </p>
      <p className="comment__title">{name}</p>
      <p>{body}</p>
    </div>
  );
}

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
