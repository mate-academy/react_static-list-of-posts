import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentsList = ({ comments }) => (
  <ul>
    <h3>Comments:</h3>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </ul>
);

CommentsList.defaultProps = {
  comments: 'There are no comments',
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentsList;
