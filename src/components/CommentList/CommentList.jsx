import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { commentTypes } from '../../commetTypes';

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
  comments: PropTypes.arrayOf(commentTypes.comments).isRequired,
  post: PropTypes.arrayOf(commentTypes.post).isRequired,
};
