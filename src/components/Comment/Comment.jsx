import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <div className="comment">
    <h3 className="comment__title">
      {name}
    </h3>

    <a href={`mailto:${email}`} className="comment__email">
      {email}
    </a>

    <p className="comment__text">
      {body}
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
