import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => {
  const isComments: boolean = comments.length > 0;

  return (
    <ul className="CommentList">
      {isComments ? (
        comments.map(comment => (
          <CommentInfo comment={comment} key={Math.random()} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </ul>
  );
};
