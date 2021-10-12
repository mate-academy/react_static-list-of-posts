import React from 'react';
import './CommentInfo.scss';
import { IComment } from '../../types/Posts';

type Props = {
  comment: IComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="Comment">
      <span className="Comment__name">{ comment.name }</span>
      <span className="Comment__email">{ comment.email }</span>
      <p className="Comment__body">{ comment.body }</p>
    </div>
  </>
);
