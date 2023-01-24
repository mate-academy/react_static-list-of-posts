import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length) {
    return (
      <ul className="CommentList">
        {comments.map(comment => (
          <CommentInfo
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    );
  }

  return <b data-cy="NoCommentsMessage">No comments yet</b>;
};
