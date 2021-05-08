import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <>
    <span className="text">
      {body}
    </span>
    <span className="name">
      author:
      {name}
      <span className="email">
        (
        {' '}
        {email}
        {' '}
        )
      </span>
    </span>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
