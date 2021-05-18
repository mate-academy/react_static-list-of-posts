import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <>
    <h3>{name}</h3>
    <p>{body}</p>
    <span>{email}</span>
  </>
);

Comment.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string.isRequired,
  email: PropTypes.string,
};

Comment.defaultProps = {
  name: '',
  email: '',
};

export default Comment;
