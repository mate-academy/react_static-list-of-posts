import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.length
      ? (comments.map((comment) => (
        <div className="CommentInfo" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      )))
      : (<b data-cy="NoCommentsMessage">No comments yet</b>)}
  </div>
);
