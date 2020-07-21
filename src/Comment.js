import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <p>
    {comment.name}
    <br />
    {comment.body}
    <br />
    {comment.email}
  </p>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  }),
};

Comment.defaultProps = {
  comment: {},
};

export default Comment;
