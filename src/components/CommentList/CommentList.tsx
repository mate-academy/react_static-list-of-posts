import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    Comments:
    {comments.map((comment: Comment) => (
      <li
        key={comment.id}
        className="comment"
      >
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
