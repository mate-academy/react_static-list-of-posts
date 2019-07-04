import React from 'react';
import PropTypes from 'prop-types';

function Comment({ currentComment }) {
  return (
    <div>
      <h2>
        Name:
        {currentComment.name}
      </h2>
      <h4>
        Email:
        {currentComment.email}
      </h4>
      <p>
        Body:
        {currentComment.body}
      </p>
    </div>
  );
}

Comment.propTypes = {
  currentComment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
export default Comment;
