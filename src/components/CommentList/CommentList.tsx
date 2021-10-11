import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  commentsIt: Comment[],
};

export const CommentList: React.FC<Props> = (props) => {
  const { commentsIt } = props;

  return (
    <>
      <strong>Comment:</strong>
      <ul className="block">
        {commentsIt.map(comment => {
          return (
            <li
              key={comment.id}
            >
              <CommentInfo commentInfo={comment} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
