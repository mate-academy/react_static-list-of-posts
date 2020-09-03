import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h5 className="comment__title">
      {name}
    </h5>
    <p>
      {body}
    </p>
    <a href={`@mailto: ${email}`}>
      {email}
    </a>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
