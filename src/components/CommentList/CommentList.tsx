import React from 'react';

import './CommentList.scss';
import { Comment } from '../types/Comment';
import { CommentInfo } from '../CommentsInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <React.Fragment key={comment.id}>
        <CommentInfo comment={comment} />
      </React.Fragment>
    ))}
  </>
);
