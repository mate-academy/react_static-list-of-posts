import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {(comments.length > 0)
      ? comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
