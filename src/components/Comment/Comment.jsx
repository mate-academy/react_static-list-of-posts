import React from 'react';
import PropTypes from 'prop-types';

import './comment.scss';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <div className="comment">
    <p className="comment__name">{name}</p>
    <p className="comment__body">{body}</p>
    <p className="comment__email">{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
