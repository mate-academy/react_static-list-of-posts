import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <>
    <h3>
      {`Name: 
      ${comment.name}
      , email: 
      ${comment.email}`}
    </h3>
    <p>
      {comment.body}
    </p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
