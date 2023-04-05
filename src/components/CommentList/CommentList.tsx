import React from 'react';
import { Comment } from '../../types/CommentInfo';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[]
};

const commentListSending = (comments: Comment[]) => {
  if (comments.length === 0) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return comments.map((comment: Comment) => (
    comment
    && (
      <CommentInfo
        comment={comment}
        key={comment.id}
      />
    )
  ));
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {commentListSending(comments)}
  </div>
);
