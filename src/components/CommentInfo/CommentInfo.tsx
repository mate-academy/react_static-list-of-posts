import React from 'react';
import './CommentInfo.scss';
import { IComment } from '../../types/Posts';

type Props = {
  comment: IComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="Comment">
      <div className="Comment__user">
        <span className="Comment__name">{ comment.name }</span>
        <span className="Comment__email">{ comment.email }</span>
      </div>

      <p className="Comment__body">{ comment.body }</p>

      <hr />
    </div>
  </>
);
