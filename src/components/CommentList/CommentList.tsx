import React from 'react';
import './CommentList.scss';

import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo';

type CommentsType = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentsType> = ({ comments }) => (
  <>
    <div className="CommentList">
      <div className="CommentInfo">
        {comments.map(comment => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  </>
);
