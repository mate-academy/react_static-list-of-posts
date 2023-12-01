import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/CommentsTypes';
import { CommentInfo } from '../CommentInfo';

type CommentsProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentsProps> = ({ comments }) => (
  <>
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo
          comment={comment}
          key={comment.id}
        />
      ))}
    </div>
  </>
);
