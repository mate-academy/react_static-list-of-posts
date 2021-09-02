import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <ul className="comments">
      {comments.map((comment: Comment) => (
        <li
          key={comment.id}
          className="comments__item"
        >
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
