
import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment/comment';

function CommentList({ thisPostComments, users }) {
  return (
    <ul>
      {thisPostComments.map(comment => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}

CommentList.propTypes = {
  thisPostComments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
