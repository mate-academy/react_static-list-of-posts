import React from 'react';

import { PostComment } from '../../types/PostComment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
