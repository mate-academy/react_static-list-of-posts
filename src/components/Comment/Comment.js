import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>

    <h3>
      Title:
      {' '}
      {' '}
      {name}
    </h3>
    <p>
      {' '}
      <em>
        email:
        {' '}
      </em>
      {' '}
      {email}
    </p>

    <section>{body}</section>

  </>

);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
