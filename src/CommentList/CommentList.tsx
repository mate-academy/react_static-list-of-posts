import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './Comment.scss';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="Comment">
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </div>
);
