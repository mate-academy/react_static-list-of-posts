import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <>
    <h5>{comment.name}</h5>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);

Comment.defaultProps = {
  comment: {},
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  }),
};
