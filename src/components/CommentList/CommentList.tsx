import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Prop = {
  comments: PostComment[] | null,
};

export const CommentList: React.FC<Prop> = ({ comments }) => {
  return (
    <ul className="commentList">
      {comments?.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </ul>
  );
};
