import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <li className="comment__item">
    <span className="comment__name">
      {name}
    </span>
    <br />
    {body}
    <br />
    <b>
      {`Email: `}
    </b>
    <a href={`mailto:${email}`} className="comment__link">
      {email}
    </a>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
