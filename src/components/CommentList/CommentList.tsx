import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Comments = {
  comments: Comment[];
};

export const CommentList: React.FC<Comments> = ({ comments }) => (
  <>
    {comments.length > 0
      ? comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
      : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>

        </>
      )}
  </>
);
