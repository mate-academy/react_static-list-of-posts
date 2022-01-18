import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type CommentsProps = {
  comments: CommentTypes[]
};

export const CommentList: React.FC<CommentsProps> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <div className="comments">
        <CommentInfo comment={comment} />
      </div>
    ))}
  </>

);
