import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment: { name, email, body } }) {
  return (
    <p className="posts__comment">
      <span className="posts__comment-name">{`Name: ${name}`}</span>
      <span className="posts__comment-email">{`email: ${email}`}</span>
      <span className="posts__comment-text">{`text: ${body}`}</span>
    </p>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
