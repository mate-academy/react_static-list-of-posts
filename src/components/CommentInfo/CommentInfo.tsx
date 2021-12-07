import React from 'react';
import style from './CommentInfo.module.css';
import { Comment } from '../../types/Types';

type Props = {
  comment: Comment,
};

const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className={style.comment}>
    <div className={style.commentContainer}>
      <h5>{comment.name}</h5>
      <h6 className={style.commentEmail}>{comment.email}</h6>
    </div>
    <p className={style.commentText}>{comment.body}</p>
  </div>
);

export default CommentInfo;
