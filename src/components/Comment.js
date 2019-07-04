import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <section className="full__comment">
    <div className="comments__author">
      ♦&nbsp;
      {comment.name}
    </div>
    <div>{comment.body}</div>
    <div className="comments__email">{comment.email}</div>
  </section>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Comment;
