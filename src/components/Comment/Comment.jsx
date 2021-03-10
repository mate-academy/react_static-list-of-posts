import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <h4 className="comment__name">{name}</h4>
    <p className="comment__text">{body}</p>
    <a
      className="comment__mail"
      href={`mailto:${email}`}
    >
      {email}
    </a>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
