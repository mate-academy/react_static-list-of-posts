import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comments';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
