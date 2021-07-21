import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <>
    <div className="card-header">
      <strong>{comment.name}</strong>
      <p>{comment.body}</p>
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <footer className="blockquote-footer">
          {comment.email}
        </footer>
      </blockquote>
    </div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
