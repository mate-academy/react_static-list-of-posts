import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.length
      ? comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </ul>
);
