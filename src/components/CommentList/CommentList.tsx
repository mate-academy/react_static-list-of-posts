import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li>
        <CommentInfo comment={comment} key={comment.id} />
      </li>
    ))}
  </ul>
);
