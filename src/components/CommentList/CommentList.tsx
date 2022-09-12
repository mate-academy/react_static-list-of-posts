import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = { comments: Comment[] };

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (!comments.length) {
    return <p data-cy="NoCommentsMessage">No comments yet</p>;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => <CommentInfo comment={comment} />)}
    </div>
  );
};
