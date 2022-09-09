import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/index';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const noComment = <b data-cy="NoCommentsMessage">No comments yet</b>;
  const commentary = comments
    .map((comment) => <CommentInfo comment={comment} key={comment.id} />);

  return (
    <div className="CommentList">
      {comments.length > 0 ? commentary : noComment}
    </div>
  );
};
