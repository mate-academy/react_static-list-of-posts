import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  postId: number,
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ postId, comments }) => {
  const postComments = comments.filter(comment => comment.post?.id === postId);

  return (
    <div className="CommentList">
      {postComments.length > 0 ? (
        postComments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
