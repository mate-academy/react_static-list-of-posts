import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    { comments.map(item => (
      <CommentInfo comment={item} key={item.id} />
    ))}
  </div>
);
