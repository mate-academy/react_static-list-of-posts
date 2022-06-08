import React from 'react';
import { Comment } from '../../types/comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <>
      <div className="comment">
        <h3 className="comment_name" data-cy="comment-name">{comment.name}</h3>
        <p className="comment_body" data-cy="comment-email">
          <i>{comment.body}</i>
        </p>
        <div className="comment_email" data-cy="comment-body">
          {comment.email}
        </div>
      </div>
    </>
  );
};
