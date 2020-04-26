import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

function CommentsList({ comments }) {
  return (
    <section className="post__comments-section">
      <h3 className="post__comments-title">Comments:</h3>
      {comments.map(comment => <Comment comments={comment} key={comment.id} />)}
    </section>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.objectOf({
    body: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentsList;
