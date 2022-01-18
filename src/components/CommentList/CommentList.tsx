import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type CommentsProps = {
  comments: CommentTypes[]
};

export const CommentList: React.FC<CommentsProps> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <div key={comment.id} className="comments">
        <CommentInfo comment={comment} />
      </div>
    ))}
  </>

);
