import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment-list__item">
    <span className="comment-list__title">
      {name}
    </span>
    <p className="comment-list__text">{body}</p>
    <p className="comment-list__email">{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  email: PropTypes.string.isRequired,
};

Comment.defaultProps = {
  name: '',
  body: '',
};
