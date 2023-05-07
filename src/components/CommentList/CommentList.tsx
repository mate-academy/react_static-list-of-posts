import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comment';

export type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.length > 0
      ? (
        comments.map((comment) => <CommentInfo comment={comment} />)
      )
      : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
  </div>
);
