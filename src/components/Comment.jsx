import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <li className="comment__item">
    <h3 className="comment__title">
      {name}
    </h3>
    <p className="comment__text">
      {body}
    </p>
    <a className="comment__email" href={`mailto:${email}`}>
      {email}
    </a>
  </li>
);

Comment.defaultProps = {
  email: '',
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  body: PropTypes.string.isRequired,
};
