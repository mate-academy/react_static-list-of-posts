import React from 'react';
import { UserComment } from '../../types/UserComment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type CommentListProps = {
  comments: UserComment[]
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {
      comments.map(comment => (
        <CommentInfo
          key={comment.id}
          comment={comment}
        />
      ))
    }
  </div>
);
