import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

import { Comment } from '../../types/types';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  if (comments.length > 0) {
    return (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo key={comment.id} {...comment} />
        ))}
      </div>
    );
  }

  return <b data-cy="NoCommentsMessage">No comments yet</b>;
};
