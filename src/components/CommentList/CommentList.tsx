import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../Types/сomments';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comments={comment} />
    ))}
  </div>
);
