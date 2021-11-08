import React from 'react';
import { Comment } from '../../types';
import './CommentList.scss';

type Props = {
  comment: Comment,
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div className="comment-list">
    <h3 className="comment-list__title">
      {comment.name}
    </h3>
    <p className="comment-list__email">
      Message to: (
      {comment.email}
      )
    </p>
    <p className="comment-list__text">
      {comment.body}
    </p>
  </div>
);
