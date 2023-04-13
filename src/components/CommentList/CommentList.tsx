import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="CommentList">
      {comments.length > 0 ? (
        comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />))
      ) : (
        <p data-cy="NoCommentsMessage">No comments yet</p>)}
    </ul>
  );
};
