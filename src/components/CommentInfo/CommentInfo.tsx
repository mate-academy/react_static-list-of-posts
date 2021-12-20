import React from 'react';
import { Comment } from '../../type/comment';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div>
      {comment.name}
    </div>
    <p>
      {comment.body}
    </p>
    <div>
      {comment.email}
    </div>
  </>
);
