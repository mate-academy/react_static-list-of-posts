import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p className="comment__name">{name}</p>
    <p className="comment__body">{body}</p>
    <a className="comment__email" href={`mailto:${email}`}>{email}</a>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string,
};

Comment.defaultProps = {
  email: '',
};
