import React from 'react';
import { Comment } from '../types/Comments';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <CommentInfo
        key={comment.id}
        name={comment.name}
        email={comment.email}
        body={comment.body}
        id={comment.id}
      />
    ))}
    ;
  </>
);
