import React from 'react';
import { Comment } from './types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comment: Comment[],
};

export const CommentList: React.FC<Props> = ({ comment }) => {
  return (
    <ul className="comment">
      Comments:
      {comment.map(item => (
        <li className="comment__list">
          <CommentInfo comments={item} />
        </li>
      ))}
    </ul>
  );
};
