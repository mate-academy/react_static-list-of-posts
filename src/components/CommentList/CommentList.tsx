import React from 'react';
import commentsFromServer from '../../api/comments';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

const comments: Comment[] = commentsFromServer;

interface Props {
  postId: number;
}

export const CommentList: React.FC<Props> = ({ postId }) => {
  const needComments = comments.filter(comment => (
    postId === comment.postId
  ));

  return (

    needComments.length > 0
      ? (
        <div className="CommentList">
          {
            needComments.map(comment => (
              <CommentInfo comment={comment} key={comment.id} />
            ))
          }
        </div>
      )
      : <b data-cy="NoCommentsMessage">No comments yet</b>
  );
};
