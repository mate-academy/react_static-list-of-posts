import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : comments.map(comment => (
        comment && (
          <CommentInfo
            key={comment.id}
            comment={comment}
          />
        )
      ))}
  </div>
);
