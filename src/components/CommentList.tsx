import React from 'react';
import { Comment } from './types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="comment">
      Comments:
      {comments.map(item => (
        <li className="comment__list" key={item.id}>
          <CommentInfo comment={item} />
        </li>
      ))}
    </ul>
  );
};
