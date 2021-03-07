import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <>
    <p>
      {name}
    </p>
    <p>
      {body}
    </p>
    <a href={`mailto: ${email}`}>
      {email}
    </a>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
