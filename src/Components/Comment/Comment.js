import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comments }) => (
  <section className="post__comment">
    <p className="post__comment-body">{comments.body}</p>
    <div className="post__comment-author">
      <a href="link" className="post__comment-author-email">
        {comments.email}
      </a>
      <span className="post__comment-author-name">{comments.name}</span>
    </div>
  </section>
);

Comment.propTypes = {
  comments: PropTypes.shape({
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
