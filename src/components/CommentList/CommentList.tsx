import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { CommentFromServer } from '../../types/Comments';

type Props = {
  comments: CommentFromServer[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return comments?.length
    ? (
      <div className="CommentList">
        {comments?.map((comment) => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    )
    : <b data-cy="NoCommentsMessage">No comments yet</b>;
};
