import React from 'react';
import { Comment } from '../../types/comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <p>
      {comment.name}
    </p>
    <p>
      {comment.body}
    </p>
    <p>
      {comment.email}
    </p>
  </div>
);
