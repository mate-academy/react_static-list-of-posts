import React from 'react';
import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      <strong>Comment:</strong>
      <ul className="block">
        {comments.map(comment => {
          return (
            <li
              key={comment.id}
            >
              <CommentInfo commentInf={comment} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
