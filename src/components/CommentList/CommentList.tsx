import React from 'react';

import { Comments } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

interface CommentListProps {
  comments: Comments[]
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.length > 0
      ? comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
