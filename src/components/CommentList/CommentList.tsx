import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comment: Comment[];
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul className="commentaries">
    {comment.map(currentComment => (
      <li
        key={currentComment.id}
        className="comment"
      >
        <CommentInfo comment={currentComment} />
      </li>
    ))}
  </ul>
);
