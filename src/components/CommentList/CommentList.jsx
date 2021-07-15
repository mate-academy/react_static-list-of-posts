import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import CommentTypes from '../../types/CommentTypes';
import PostTypes from '../../types/PostTypes';

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
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
  post: PostTypes.isRequired,
};
