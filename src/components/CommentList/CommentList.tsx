import React from 'react';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li className="CommentInfo" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
