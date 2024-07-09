import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comments';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comments={comment} />
      ))}
    </div>
  );
};
