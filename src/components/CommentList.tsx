import React from 'react';
import { CommentInfo } from './CommentInfo';

type Props = {
  commentArr: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { commentArr } = props;

  return (
    <div className="comments">
      <h2 className="comments__title">Comments</h2>
      <ul className="comments__list">
        {commentArr.map(comment => (
          <li key={comment.id} className="comments__item">
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};
