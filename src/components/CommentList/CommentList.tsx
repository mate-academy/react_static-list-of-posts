import React from 'react';
import { CommentType } from '../../types/CommentType';
import { CommentInfo } from '../CommentInfo';

type CommentListProps = {
  comment: CommentType;
};

export const CommentList: React.FC<CommentListProps> = ({ comment }) => {
  return (
    <div className="CommentList">
      <CommentInfo
        name={comment.name}
        email={comment.email}
        body={comment.body}
        key={comment.id}
      />
    </div>
  );
};
