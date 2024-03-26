import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

interface Props {
  comments?: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments === undefined) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div>
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
