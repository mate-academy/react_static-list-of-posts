import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../types/Comments';

interface Props {
  comments: Comments[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
