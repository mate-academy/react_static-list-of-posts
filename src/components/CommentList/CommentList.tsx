import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import commentsFromServer from '../../api/comments';

type Props = {
  postId: number,
};

function getComments(id: number): Comment[] | null {
  const postComments
  = commentsFromServer.filter(comment => id === comment.postId);

  return postComments || null;
}

export const CommentList: React.FC<Props> = ({ postId }) => {
  const commentsArray = getComments(postId);

  return (
    commentsArray?.length ? (
      <div className="CommentList">
        {commentsArray.map(comment => (
          <CommentInfo comment={comment} />
        ))}
      </div>
    ) : (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">
          No comment yet
        </b>
      </>
    )
  );
};
