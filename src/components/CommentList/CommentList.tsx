import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  comments.length
    ? (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    )
    : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )
);
