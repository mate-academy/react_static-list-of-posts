import React from 'react';
import { Comment } from './types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 className="commentTitle">
      {comment.name}
    </h3>
    <p className="commentBody">
      {comment.body}
    </p>
    <p className="commentEmail">
      {comment.email}
    </p>
  </>

);
