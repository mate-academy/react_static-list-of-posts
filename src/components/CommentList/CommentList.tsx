import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment: Comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
