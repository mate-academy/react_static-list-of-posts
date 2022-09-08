import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/commentType';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (!comments.length) {
    return (
      <div className="CommentList" data-cy="NoCommentsMessage">
        <p>No comments yet</p>
      </div>
    );
  }

  return (
    <div className="CommentList">
      {comments.map((comment) => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
