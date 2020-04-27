import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="bg-light p-4 mb-3">
      <h6 className="font-italic">
        <span className="font-weight-bold">{name}</span>
        <br />
        <a href={`mailto:${email}`}>{email}</a>
      </h6>
      <p>{body}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
