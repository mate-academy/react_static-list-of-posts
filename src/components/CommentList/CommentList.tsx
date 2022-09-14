import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[] | null,
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return comments?.length
    ? (
      <div className="CommentList">
        {comments?.map((comment) => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    )
    : <b data-cy="NoCommentsMessage">No comments yet</b>;
};
