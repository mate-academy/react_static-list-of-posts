import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Comments = {
  comments: Comment[],
};

export const CommentList: React.FC<Comments> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li>
        <CommentInfo key={comment.id} comment={comment} />
      </li>
    ))}
  </ul>
);
