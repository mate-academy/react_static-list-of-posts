import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="comment">
      <p className="comment__name">
        {`${name} (${email})`}
      </p>
      <p className="comment__body">
        {body}
      </p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};
