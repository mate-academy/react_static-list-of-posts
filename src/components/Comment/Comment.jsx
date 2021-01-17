import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="Comment">
    <p className="Comment__header">{name}</p>
    <p className="Comment__text">{body}</p>
    <a
      href={`mailto:${email}`}
      className="Comment__email"
    >
      {email}
    </a>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
