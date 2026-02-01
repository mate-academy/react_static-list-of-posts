import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { CommentsType } from '../../types/CommentsType';

type Props = {
  comments: CommentsType[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => {
        return <CommentInfo key={comment.id} comment={comment} />;
      })}
    </div>
  );
};
