import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <h3 className="comment__name">
      {name}
    </h3>
    <p className="comment__text">
      {body}
    </p>
    <p className="comment__email">
      {email}
    </p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
