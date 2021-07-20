import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <h2>
      {name}
    </h2>
    <p>
      {body}
    </p>
    <p>
      {email}
    </p>
  </>
);

export const CommentTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Comment.propTypes = CommentTypes;
