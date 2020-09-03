import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ oneComment }) => (
  <div className="commentary">
    <p className="commentary__name">{oneComment.name}</p>
    <p className="commentary__text">{oneComment.body}</p>
    <p className="commentary__email">{oneComment.email}</p>
  </div>
);

Comment.propTypes = {
  oneComment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
