import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from './Comment';

export const CommentList = ({ post, newComments }) => (
  <ul>
    {newComments.map(comment => (
      <Comment postId={post.id} newComment={comment} />
    ))}
  </ul>
);

CommentList.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  newComments: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
