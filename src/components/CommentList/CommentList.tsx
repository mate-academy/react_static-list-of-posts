import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  (comments && comments.length > 0 && (
    <div className="CommentList">
      {comments.map(comment => <CommentInfo comment={comment} />)}
    </div>
  )) || (
    <>
      <hr />
      <b>No comments yet</b>
    </>
  )
);
