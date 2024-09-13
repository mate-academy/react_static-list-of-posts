import React from 'react';
import { Comment } from '../../types/Comment';

export const CommentList: React.FC<{ commentListComments: Comment[] }> = ({
  commentListComments,
}) => {
  return (
    <div className="CommentList">
      {commentListComments.map(comment => (
        <div key={comment.id} className="CommentInfo">
          <div className="CommentInfo__title">
            <strong className="CommentInfo__name">{comment.name}</strong>

            {' by '}

            <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
              {comment.email}
            </a>
          </div>

          <div className="CommentInfo__body">{comment.body}</div>
        </div>
      ))}
    </div>
  );
};
