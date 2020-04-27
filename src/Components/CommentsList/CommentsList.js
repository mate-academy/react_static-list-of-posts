import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentsList = ({ comments }) => (
  <section className="post__comments-section">
    <h3 className="post__comments-title">Comments:</h3>
    {comments.map(comment => <Comment comments={comment} key={comment.id} />)}
  </section>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf({
    comment: PropTypes.shape({
      id: PropTypes.number.isRequired,
      comment: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CommentsList;
