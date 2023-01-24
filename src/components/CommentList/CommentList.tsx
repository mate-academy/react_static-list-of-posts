import React from 'react';
import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(
      comment => <CommentInfo comment={comment} key={comment.id} />,
    )}
  </div>
);
