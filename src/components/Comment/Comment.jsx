import PropTypes from 'prop-types';
import React from 'react';

import './Comment.scss';

export default function Comment({
  name,
  body,
  email,
}) {
  return (
    <li className="comment__item">
      <h4 className="comment__title">
        {name}
      </h4>
      <p className="comment__body">
        {body}
      </p>
      <a
        className="comment__email"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </li>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
