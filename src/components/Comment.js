import React from 'react';
import PropTypes from 'prop-types';

function Comment({ name, email, body }) {
  return (
    <div className="comment">
      <p>{body}</p>
      <b>{name}</b>
      <p>{email}</p>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
