import React from 'react';
import { CommentTypes } from '../../types/commentTypes';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: CommentTypes[] | [];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <div key={comment.id} className="CommentInfo">
          <CommentInfo comment={comment} />
        </div>

      ))}
    </div>
  );
};
