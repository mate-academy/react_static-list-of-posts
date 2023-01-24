import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length) {
    return (
      <ul className="CommentList">
        {comments.map(comment => <CommentInfo comment={comment} />)}
      </ul>
    );
  }

  return <b data-cy="NoCommentsMessage">No comments yet</b>;
};
