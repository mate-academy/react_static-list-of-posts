import React from 'react';
import { Comment } from '../../interfaces/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="commentInfo">
    <h3 className="commentInfo__title">
      {comment.name}
    </h3>
    <div className="commentInfo__body">
      <div className="commentInfo__content">
        {comment.body}
      </div>
      <a href={comment.email} className="commentInfo__author-link">
        {comment.email}
      </a>
    </div>
  </div>
);
