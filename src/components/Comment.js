import React from 'react';
import PropTypes from 'prop-types';

export function Comment({ name, body, email }) {
  return (
    <>
      <div className="сomment">
        {name}
        {' '}
        <p>{body}</p>
        {' '}
        <address>
          {email}
        </address>
      </div>
    </>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
