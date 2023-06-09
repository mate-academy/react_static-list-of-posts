import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comments[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
