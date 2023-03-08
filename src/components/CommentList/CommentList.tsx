import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Comments = {
  commentsList: Comment[];
};

export const CommentList: React.FC<Comments> = ({ commentsList }) => (
  <ul className="CommentList">
    {commentsList.map(comment => (
      <li key={comment.id} className="CommentInfo">
        <CommentInfo commentInfo={comment} />
      </li>
    ))}
  </ul>
);
