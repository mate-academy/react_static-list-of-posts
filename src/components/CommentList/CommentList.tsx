import React from 'react';
import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {
      comments.map((comment : Comment) => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    }
  </div>
);
