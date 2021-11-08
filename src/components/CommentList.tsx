import React from 'react';
import { Comment } from '../type/Post';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList:React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
