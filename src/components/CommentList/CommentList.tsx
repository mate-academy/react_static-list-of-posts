import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const haveComments = comments
    .map(comment => <CommentInfo comment={comment} />);
  const noComments = <p data-cy="NoCommentsMessage">No comments yet</p>;

  return (
    <div className="CommentList">
      {comments.length !== 0 ? haveComments : noComments}
    </div>
  );
};
