import React from 'react';

import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment[];
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <div className="CommentList">
    {comment.map(commentItem => (
      <CommentInfo
        comment={commentItem}
        key={commentItem.id}
      />
    ))}
  </div>
);
