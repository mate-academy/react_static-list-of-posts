import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="CommentList">
      {comments.length > 0 ? (
        comments.map(({ id, ...comment }) => (
          <CommentInfo comment={comment} key={id} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </ul>
  );
};
