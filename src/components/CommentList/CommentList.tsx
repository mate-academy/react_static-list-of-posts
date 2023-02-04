import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const commentList
  = comments.length > 0 ? (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  ) : (
    ''
  );

  return <div className="CommentList">{commentList}</div>;
};
