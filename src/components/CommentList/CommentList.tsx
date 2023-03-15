import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const commentListContent = (
    comments.map(comment => (
      <CommentInfo
        comment={comment}
        key={comment.id}
      />
    )));

  const commentListEmptyContent = (
    <b data-cy="NoCommentsMessage">
      No comments yet
    </b>
  );

  return (
    <div className="CommentList">
      {comments.length
        ? commentListContent
        : commentListEmptyContent}
    </div>
  );
};
