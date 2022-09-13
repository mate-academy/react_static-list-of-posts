import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return comments && comments.length
    ? (
      <div className="CommentList">
        {
          comments.map(comment => (
            <CommentInfo key={comment.id} comment={comment} />
          ))
        }
      </div>
    )
    : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
};
