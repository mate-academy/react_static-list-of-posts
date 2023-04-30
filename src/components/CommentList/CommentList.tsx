import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { CommentListType } from '../../type/comment';
import './CommentList.scss';

export const CommentList: React.FC<CommentListType> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <div className="CommentInfo" key={comment.id}>
        <CommentInfo comment={comment} />
      </div>
    ))}
  </div>
);
