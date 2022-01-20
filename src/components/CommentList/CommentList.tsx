import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { TypeComment } from '../../types/TypeComment';

type Props = {
  comments: TypeComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li
        key={comment.id}
      >
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>
);
