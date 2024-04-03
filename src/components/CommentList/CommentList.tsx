import React from 'react';
import { Post } from '../../types/Post';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList: React.FC<{ comments: Post['comments'] }> = ({
  comments,
}) => {
  return (
    <div className="CommentList">
      {comments?.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
