import React from 'react';
import { Comments } from '../type/Post';
import { CommentInfo } from './CommentInfo';

type CommentListType = {
  comments: Comments[]
};

export const CommentList:React.FC<CommentListType> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
