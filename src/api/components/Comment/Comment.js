import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <h3 className="Comment__title">
      {name}
    </h3>
    <p className="Comment__author">
      {body}
    </p>
    <a href={`mailto: ${email}`} className="Comment__email">
      {email}
    </a>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
