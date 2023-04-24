import React from 'react';
import { Comment } from '../../types/CommentInfo';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {!comments.length
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : comments.map((comment: Comment) => (
        comment
        && (
          <CommentInfo
            comment={comment}
            key={comment.id}
          />
        )
      ))}
  </div>
);
