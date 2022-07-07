import React from 'react';
import { Comment } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div>
    {comments.map((comment) => (
      <div>
        <span>
          {comment.name}
        </span>
        <span>
          {comment.body}
        </span>
      </div>
    ))}
  </div>
);
