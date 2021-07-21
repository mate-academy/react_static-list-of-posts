import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <p>
      <strong>
        User
      </strong>
      {' - '}
      {name}
    </p>
    <p>
      <strong>
        Email
      </strong>
      {' - '}
      {email}
    </p>
    <p>
      <strong>
        Comment
      </strong>
      {' : '}
      {body}
    </p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
