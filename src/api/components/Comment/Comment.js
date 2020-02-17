import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className="comment">
      <h4>{name}</h4>
      <p>{body}</p>
      <a href={email}>
        {email}
      </a>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
