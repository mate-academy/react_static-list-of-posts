import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <div className="CommentList">
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        {comments.map(item => (
          <CommentInfo comment={item} />
        ))}
      </div>
    </div>
  </div>
);
