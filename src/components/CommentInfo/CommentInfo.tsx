import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/Posts';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div className="comment__user">
      <span className="comment__name">{ comment.name }</span>
      <span className="comment__email">{ comment.email }</span>
    </div>

    <p className="comment__body">{ comment.body }</p>

    <hr />
  </div>
);
