import React from 'react';
import { userPostCommentType } from '../../types';
import { Comment } from '../Comment';

export const CommentList = ({ post }) => (
  <div className="comment__list">
    {post.comment.map(comment => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  post: userPostCommentType.isRequired,
};
