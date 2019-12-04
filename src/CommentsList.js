import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentsList = ({ comments }) => (
  <div className="post__comments comments">
    <p>Comments:</p>
    <ul className="comments__list">
      {comments.map(comment => <Comment comment={comment} />)}
    </ul>
  </div>
);

// eslint-disable-next-line object-curly-newline
CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired };

export default CommentsList;
