import React from 'react';

import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comment';

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
