import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <section className="comments">
    <p className="comments__name">{name.toUpperCase()}</p>
    <p className="comment__email">{email}</p>
    <p className="comments__body">{body}</p>
  </section>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
