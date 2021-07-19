import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <div className="callout">
    <h4 className="comment__author">
      {name}
    </h4>
    <p className="comment__body">
      {body}
    </p>
    <span role="img" aria-label="Account icon">📧 </span>
    <a href={`mailto: ${email}`} className="comment__email">
      {email}
    </a>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
