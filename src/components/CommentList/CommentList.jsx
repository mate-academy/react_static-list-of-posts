import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import PostsType from '../../types/postsTypes';
import CommentsType from '../../types/commentsTypes';

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
  comments: PropTypes.arrayOf(CommentsType).isRequired,
  post: PostsType.isRequired,
};
