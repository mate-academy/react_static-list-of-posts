import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length > 0) {
    return (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    );
  } else {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }
};
