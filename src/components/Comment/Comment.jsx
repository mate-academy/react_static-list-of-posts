import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <li className="comment">
    <div className="comment__email">{`From: ${email}`}</div>
    <h4 className="comment__title">{`Re: ${name}`}</h4>
    <p className="comment__text">{body}</p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
