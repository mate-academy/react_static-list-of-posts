import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <li className="list-comments__item">
    <p className="list-comments__text">
      {body}
    </p>
    <span className="list-comments__name">
      {`Name: ${name}`}
    </span>
    <div className="list__mark-email">
      {'e-mail: '}
      <a href={`mailto:${email}`} className="list__email">
        {email}
      </a>
    </div>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}.isRequired;
