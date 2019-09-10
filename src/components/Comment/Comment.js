import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  const { name, email, body } = comment;

  return (
    <>
      <h2>{name}</h2>
      <a href={`mailto:{email}`}>{email}</a>
      <p>{body}</p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
