import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[] | null,
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments
      ? comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
