import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';

function Comment(props) {
  const { name, body, email } = props;

  return (
    <>
      <h3>{name}</h3>
      <p>{body}</p>
      <p>{email}</p>
    </>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
