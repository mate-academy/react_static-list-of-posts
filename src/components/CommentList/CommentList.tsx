import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../types/Comments';
import './CommentList.scss';

interface Props {
  comments: Comments[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : comments.map((comment) => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
  </div>
);
