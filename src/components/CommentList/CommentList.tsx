import React from 'react';

import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

interface CommentInfoProps {
  comments: Comment[],
}

export const CommentList: React.FC<CommentInfoProps> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo
          comment={comment}
          key={comment.id}
        />
      ))}
    </div>
  );
};
