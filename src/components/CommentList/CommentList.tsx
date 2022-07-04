import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[] | undefined;
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments?.map(comment => {
      return (
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      );
    })}
  </ul>
);
