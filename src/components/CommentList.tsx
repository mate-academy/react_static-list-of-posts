import React from 'react';
import CommentInfo from './CommentInfo';
import { Comment } from '../types/Comment';

interface Props {
  comments: Comment[];
}

const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments-block">
    {comments.map(comment => (
      <div className="comment-block" key={comment.id}>
        <CommentInfo comment={comment} />
      </div>
    ))}
  </div>
);

export default CommentList;
