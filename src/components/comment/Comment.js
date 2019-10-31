import React from 'react';
import PropTypes from 'prop-types';

function Comment({comment:{name, body}}) {
  return (
    <p>
      <strong>{name}</strong>: {body}
    </p>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment;
