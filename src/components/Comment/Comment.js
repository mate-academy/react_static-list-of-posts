import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, email, body }) => (
  <>
    <h5 className="comment__name">{name}</h5>
    <p className="comment__body">{body}</p>
    <p className="comment__email">{email}</p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
