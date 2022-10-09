import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { CommentFromServer } from '../../types/Comment';

type Props = {
  comments: CommentFromServer[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return comments?.length
    ? (
      <ul className="CommentList">
        {comments?.map((comment) => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </ul>
    )
    : <b data-cy="NoCommentsMessage">No comments yet</b>;
};
