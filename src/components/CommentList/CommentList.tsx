import React from 'react';

import './CommentList.scss';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type CommentsProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentsProps> = ({ comments }) => (
  <>
    <div className="CommentList">
      {comments.map((comment) => (
        <CommentInfo
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  </>
);
