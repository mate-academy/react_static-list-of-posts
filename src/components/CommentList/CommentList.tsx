import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

interface CommentListProps {
  comments: Comment[] | null;
}

export const CommentList: React.FC <CommentListProps> = ({ comments }) => (
  <>
    <div className="CommentList">
      { (!comments || comments.length === 0)
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : comments?.map((comment) => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
    </div>
  </>
);
