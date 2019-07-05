import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comm }) {
  return (
    <div>
      <p>Comment:</p>
      <p>{comm.body}</p>
    </div>
  );
}

Comment.propTypes = {
  comm: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
