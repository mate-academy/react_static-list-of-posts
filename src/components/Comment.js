import React from 'react';
import PropTypes from 'prop-types';

function Comment({
  name,
  body,
  email,
}) {
  return (
    <div className="commentbox">
      <h3>{name}</h3>
      <p>{body}</p>
      <p>{email}</p>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
