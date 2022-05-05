import React from 'react';
import { Comment } from '../Types/Types';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul data-cy="comments-list">
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
