import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comments } from '../../types/Comments';
import './CommentList.scss';

type CommentListTypes = {
  comments: Comments[];
};

export const CommentList: React.FC<CommentListTypes> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.length ? (
        comments.map((comment) => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
