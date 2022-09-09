import React from 'react';
import { CommentsFromServer } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: CommentsFromServer[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return comments.length ? (
    <div className="CommentList">
      {comments.map((comment) => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  )
    : <b data-cy="NoCommentsMessage">No comments yet</b>;
};
