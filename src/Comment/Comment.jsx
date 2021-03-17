import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, comment, email }) => (
  <div className="comment">
    <p className="comment__text">{comment}</p>
    <div className="info">
      <span className="info__name">{name}</span>
      <span className="info__email">{email}</span>
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
