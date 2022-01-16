import React from 'react';
import { Comment } from '../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comments-list">
    <div className="comments-list__user-info">
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
      <div className="comments-list__user-info__name">{comment.name}</div>
      <div className="comments-list__user-info__email">{comment.email}</div>
    </div>
    <p className="comments-list__body">{comment.body}</p>
  </div>
);
