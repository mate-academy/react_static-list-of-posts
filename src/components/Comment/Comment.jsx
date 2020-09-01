import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <article className="Comment">
    <h3 className="Comment__name">
      {name}
    </h3>

    <span className="Comment__email">
      {email}
    </span>

    <p className="Comment__body">
      {body}
    </p>
  </article>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
