import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <section className="p-3 mb-1 rounded border bg-secondary">
      <p className="font-italic font-weight-bold">{name}</p>
      <p className="font-italic">{body}</p>
      <p className="text-right small">{email}</p>
    </section>
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
