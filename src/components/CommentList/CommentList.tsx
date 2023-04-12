import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="commentsList">
    {comments.length < 1
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : comments.map(comment => (
        <CommentInfo
          comment={comment}
          key={comment.id}
        />
      ))}
  </div>
);
