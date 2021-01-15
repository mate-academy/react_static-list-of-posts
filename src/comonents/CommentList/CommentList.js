import React from 'react';
import { Comment } from '../Comment';
import { CommentsType } from '../types';

export const CommentList = ({ comments }) => (
  <ul className="post__comments-list">

    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: CommentsType.isRequired,
};
