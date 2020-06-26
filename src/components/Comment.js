import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = (props) => {
  const { commentatorEmail, commentatorName, commentText } = props;

  return (
    <li className="list-group-item">
      <em>{commentatorName}</em>
      <em>{commentatorEmail}</em>
      <br />
      {commentText}
    </li>
  );
};

Comment.propTypes = {
  commentatorName: PropTypes.string.isRequired,
  commentatorEmail: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
};
