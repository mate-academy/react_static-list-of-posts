import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    Comments:
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>
);
