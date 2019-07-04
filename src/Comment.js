import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comm }) {
  return (
    <div>
      <p>{comm.body}</p>
      <p>{comm.email}</p>
      <p>{comm.name}</p>
    </div>
  );
}

Comment.propTypes = {
  comm: PropTypes.shape({
    email: PropTypes.string,
    body: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Comment;
