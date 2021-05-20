import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentsList = ({ comments }) => (
  <>
    <h3>Comments:</h3>

    <ol>
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </ol>

    <br />
  </>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
