import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types/Comment';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  commentsList: Comment[];
};

export const CommentList: React.FC<Props> = ({ commentsList }) => (
  <ul className="CommentList">
    {commentsList.map(comment => (
      <li key={comment.id}>
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>
);
