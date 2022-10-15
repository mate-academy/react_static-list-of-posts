import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface Prop {
  comments: Comment[] | null;
}

export const CommentList: React.FC<Prop> = ({ comments }) => {
  const commentsList = comments?.map((comment) => (
    <CommentInfo key={comment.id} comment={comment} />
  ));

  return (
    <div className="CommentList">
      {commentsList}
    </div>
  );
};
