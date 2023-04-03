import React from 'react';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

import { Comment } from '../../types/types';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return comments.length > 0
    ? (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo key={comment.id} {...comment} />
        ))}
      </div>
    )
    : (<b data-cy="NoCommentsMessage">No comments yet</b>);
};
