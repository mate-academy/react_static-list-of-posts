import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h3 className="comment__title">
      {name}
    </h3>
    <p className="comment__body">{body}</p>
    <p className="comment__email">
      {`Email: `}
      <a href={`mailto:${email}`}>{email}</a>
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
