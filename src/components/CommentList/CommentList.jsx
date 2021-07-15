import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments, post }) => (
  <ul>
    {comments.filter(comment => (
      comment.postId === post.id
    )).map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.objectOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
  })).isRequired,
  post: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
