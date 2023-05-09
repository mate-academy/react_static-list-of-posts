import React from 'react';

import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

interface CommentInfoProps {
  comment: Comment[],
}

export const CommentList: React.FC<CommentInfoProps> = ({ comment }) => {
  return (
    <div className="CommentList">
      {comment.map(comments => (
        <CommentInfo
          commentDetails={comments}
          key={comments.id}
        />
      ))}
    </div>
  );
};
