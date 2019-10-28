import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

export default function Comment({ comment }) {
  return (
    <li>
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
      <User email={comment.email} />
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
};
