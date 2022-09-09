import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const noComment = <b data-cy="NoCommentsMessage">No comments yet</b>;
  const comment = comments
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .map((comment) => <CommentInfo key={comment.id} comment={comment} />);

  return (
    <div className="CommentList">
      {comments.length > 0 ? comment : noComment}
    </div>
  );
};
