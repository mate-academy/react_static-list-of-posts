import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <article className="message is-dark">
      <div className="message-header">
        <p>{name}</p>
      </div>
      <div className="message-body">
        <p>{body}</p>
        <strong>{email}</strong>
      </div>
    </article>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
