import React from 'react';
import { CommentInfo, CommentItem } from '../CommentInfo';

type Props = {
  comments: CommentItem[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.length > 0
      ? (comments.map((comment) => (
        <div className="CommentInfo" key={comment.id}>
          <CommentInfo {...comment} />
        </div>
      )))
      : (<b data-cy="NoCommentsMessage">No comments yet</b>)}
  </div>
);

export {};
