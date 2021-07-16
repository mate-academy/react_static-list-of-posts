import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <li className="comment__item ">
    <p>{`Name: ${comment.name}`}</p>
    <p>{comment.body}</p>
    <p>{`Email: ${comment.email}`}</p>
  </li>
);

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
