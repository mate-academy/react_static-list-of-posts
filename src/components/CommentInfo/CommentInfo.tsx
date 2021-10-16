import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3>{comment.name}</h3>
    <div className="comment__body">
      {comment.body}
    </div>
    <div className="comment__email">
      {comment.email}
    </div>
  </>
);
