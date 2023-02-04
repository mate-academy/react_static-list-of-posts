import React from 'react';
import './CommentList.scss';
import { Comment } from '../../Types/comments';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments : Comment[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
