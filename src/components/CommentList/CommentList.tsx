import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  allComments: Comment[],
};

export const CommentList: React.FC<Props> = ({ allComments = [] }) => (
  <ul className="CommentList">
    {allComments.map(oneComent => (
      <CommentInfo comment={oneComent} key={oneComent.id} />
    ))}
  </ul>
);
