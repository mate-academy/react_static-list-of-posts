import React from 'react';

import './CommentInfo.scss';

import { Comment } from '../../types/Comment';

interface Props {
  comment: Comment,
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h4 className="comment__name">{comment.name}</h4>
    <div className="comment__body">{comment.body}</div>
    <div className="comment__email">{comment.email}</div>
  </>
);
