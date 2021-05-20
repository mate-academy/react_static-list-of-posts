import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p className="name">
      {name}
    </p>

    <p>{body}</p>

    <p>{email}</p>
  </div>
);

Comment.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;
