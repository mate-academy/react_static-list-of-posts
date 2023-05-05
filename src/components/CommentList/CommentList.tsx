import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0
      ? (<b data-cy="NoCommentsMessage">No comments yet</b>)
      : comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}

  </div>
);
