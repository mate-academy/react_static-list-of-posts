import React from 'react';
import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo
        key={comment.id}
        comment={{
          name: comment.name,
          email: comment.email,
          body: comment.body,
        }}
      />
    ))}
  </div>
);
