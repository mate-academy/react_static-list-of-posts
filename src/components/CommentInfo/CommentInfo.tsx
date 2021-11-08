import React from 'react';
import { Comment } from '../../types/types';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => (
  <>
    <p className="comment-info__name">{props.comment.name}</p>
    <p>{props.comment.body}</p>
    <p className="comment-info__email">{props.comment.email}</p>
  </>
);
