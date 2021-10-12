import React from 'react';
import { Comment } from '../types/Comment';

interface Props {
  comment: Comment;
}

const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3>{comment.name}</h3>
    <p className="comment-text">{comment.body}</p>
    <div className="details">
      <span className="comment-detail">{comment.email}</span>
    </div>
  </>
);

export default CommentInfo;
