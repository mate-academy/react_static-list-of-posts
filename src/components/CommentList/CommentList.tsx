import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';
import { Comment } from '../../types/Comment';

interface CommentListProps {
  comments: Comment[],
}

export const CommentList: React.FC<CommentListProps> = (props) => {
  const { comments } = props;

  return (
    <div className="CommentList">
      { comments.map(comment => (
        <CommentInfo
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};
