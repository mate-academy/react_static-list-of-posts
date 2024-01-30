import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  coments: Comment[]
};

export const CommentList: React.FC<Props> = ({ coments }) => (
  <div className="CommentList">
    {coments.map((comment) => (
      <CommentInfo commemt={comment} key={comment.id} />
    ))}
  </div>
);
