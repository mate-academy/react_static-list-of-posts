import React from 'react';
import CommentInfo from '../CommentInfo';
import { Comment } from '../../types/comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment__list">
    {comments.map(comment => (
      <li key={comment.id} className="comment_item">
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>
);
