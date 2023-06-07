import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

interface PropsCommentsList {
  comments: Comment[];
}

export const CommentList: React.FC<PropsCommentsList> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
