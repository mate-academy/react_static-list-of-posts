import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <section className="comment">
    <h4 className="comment__name">{`Name: ${name}`}</h4>
    <p className="comment__email">{email}</p>
    <p className="comment__body">{body}</p>
  </section>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
