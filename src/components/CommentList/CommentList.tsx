import React from 'react';
import { UserComment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: UserComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.length > 0
      ? (
        comments.map((comment) => <CommentInfo comment={comment} />)
      )
      : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
  </div>
);
