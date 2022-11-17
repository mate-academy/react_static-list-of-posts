import React from 'react';
import { CommentInfo } from '../CommentInfo';
import commentsFromServer from '../../api/comments';
import { Comment } from '../../types/Comment';

type Props = {
  postId: number,
};

export const getComments = (postId: number): Comment[] => {
  const foundComments = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return foundComments;
};

export const CommentList: React.FC<Props> = ({ postId }) => {
  const comments = getComments(postId);

  return (
    (comments.length <= 0)
      ? (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )
      : (
        <div className="CommentList">
          {comments.map((comment) => (
            <CommentInfo
              name={comment.name}
              email={comment.email}
              body={comment.body}
              key={comment.id}
            />
          ))}
        </div>
      )
  );
};
