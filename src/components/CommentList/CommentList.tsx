/* eslint-disable max-len */
import React from 'react';
import '../CommentList/CommentList.scss';

import { Comment } from '../Types/Comments';
import { CommentInfo } from '../CommentInfo';

export const CommentList: React.FC<{ comments: Comment[] }> = ({
  comments,
}) => {
  return (
    <div className="CommentList">
      {comments.length > 0 ? (
        comments.map(comment => (
          <CommentInfo key={comment.id} comment={comment} />
        ))
      ) : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
