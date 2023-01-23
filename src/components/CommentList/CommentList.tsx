import React from 'react';

import { Comment } from '../../types/commentType';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {
        comments.length > 0
          ? comments.map((comment) => {
            return <CommentInfo comment={comment} key={comment.id} />;
          })
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }
    </div>
  );
};
