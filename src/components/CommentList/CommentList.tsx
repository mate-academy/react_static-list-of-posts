// import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[],
};

export const CommentList = ({ comments }: Props) => {
  if (!comments.length) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {comments
        .map(comment => <CommentInfo key={comment.id} comment={comment} />)}
    </div>
  );
};
