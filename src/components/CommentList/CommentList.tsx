import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments) {
    return (
      <div className="CommentList">
        {comments.map((comment) => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }

  return (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );
};
