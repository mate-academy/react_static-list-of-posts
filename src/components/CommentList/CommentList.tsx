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
        comments.map(comment => (
          <CommentInfo comment={comment} key={Math.random()} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </ul>
  );
};
