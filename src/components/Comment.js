import React from 'react';
import PropTypes from 'prop-types';

function Comment({ name, body, email }) {
  return (
    <div className="comment">
      <p>{name}</p>
      <p>{body}</p>
      <p>{email}</p>
    </div>
  );
}

export default Comment;

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
