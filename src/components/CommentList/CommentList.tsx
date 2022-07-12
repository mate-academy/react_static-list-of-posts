import React from 'react';
import { PostComment } from '../../types/types';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="postInfo__commentsList">
    {comments.map((comment) => (
      <CommentInfo comment={comment} />
    ))}
  </ul>
);
