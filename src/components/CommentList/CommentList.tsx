import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

interface Props {
  comments: Comment[] | undefined;
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments?.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
