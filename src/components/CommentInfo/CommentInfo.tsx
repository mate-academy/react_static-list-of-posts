import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../interfaces/Comment';

interface Props {
  comment: Comment,
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <p>
    <span>
      {comment.name}
      &#160;&#160;
      {comment.email}
      &#160;&#160;
      <br />
      {comment.body}
    </span>
  </p>
);
