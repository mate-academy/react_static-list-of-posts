import React from 'react';
import { Comment } from '../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="comment">
      <div className="name">
        {comment.name}
      </div>
      <div className="user-info">
        {comment.email}
      </div>
      <div className="comment__text">
        {comment.body}
      </div>
    </div>
  </>
);
