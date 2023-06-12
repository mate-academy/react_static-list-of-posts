import React from 'react';
import { CommentInfo } from '../CommentInfo';

import { Comments } from '../../types/Comments';

type Props = {
  comments: Comments[];
  commentId: number;
};

export const CommentList: React.FC<Props> = ({ comments, commentId }) => (
  <div className="CommentList">
    {
      comments.map(comment => (
        comment.id === commentId ? <CommentInfo {...comment} key={commentId} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      ))
    }
  </div>
);
