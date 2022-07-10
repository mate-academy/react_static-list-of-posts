import React from 'react';
import { Comment } from '../../types/comments';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <h3 className="comment__title">{comment.name}</h3>
    <a href={`mailto:${comment.email}`} className="comment__link">{comment.email}</a>
    <p>{comment.body}</p>
  </div>
);
