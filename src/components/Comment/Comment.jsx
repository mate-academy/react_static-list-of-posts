import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({comment}) => (
  <>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <a href={comment.email}>{comment.email}</a>
  </>
);

Comment.propTypes = {
  comment: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
};
