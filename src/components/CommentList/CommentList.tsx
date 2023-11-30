import { FC } from 'react';

import { CommentsProps } from '../../types';
import { CommentInfo } from '../CommentInfo';

export const CommentList: FC<CommentsProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
