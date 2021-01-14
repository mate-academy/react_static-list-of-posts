import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comments__item comment">
    <u>Comments:</u>
    <p className="comment__title">{name}</p>
    <p className="comment__text">{body}</p>
    <p className="comment__email">
      <a href={`mailto:${email}`}>{email}</a>
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}
