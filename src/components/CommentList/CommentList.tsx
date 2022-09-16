import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type CommentType = {
  comments: Comment[],
};

export const CommentList: React.FC<CommentType> = ({ comments }) => (
  <>
    {comments.length > 0
      ? (
        <div className="CommentList">
          {comments.map((comment: Comment) => (
            <CommentInfo comment={comment} />
          ))}
        </div>
      )
      : ''}

  </>
);
