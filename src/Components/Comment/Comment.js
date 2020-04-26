import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comments }) {
  return (
    <section className="post__comment">
      <p className="post__comment-body">{comments.body}</p>
      <div className="post__comment-author">
        <a href="lalala" className="post__comment-author-email">
          {comments.email}
        </a>
        <span className="post__comment-author-name">{comments.name}</span>
      </div>
    </section>
  );
}

Comment.propTypes = {
  comments: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Comment;
