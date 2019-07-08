import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <div className="Comment">
    <h4>{comment.name}</h4>
    <p>{comment.body}</p>
    <p className="Commentator">{comment.email}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Comment;
