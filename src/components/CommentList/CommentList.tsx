import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

export const CommentList: React.FC<{ commentListComments: Comment[] }> = ({
  commentListComments,
}) => {
  return (
    <div className="CommentList">
      {commentListComments.map(({ id, name, email, body }) => (
        <div key={id} className="CommentInfo">
          <div className="CommentInfo__title">
            <strong className="CommentInfo__name">{name}</strong>

            {' by '}

            <a className="CommentInfo__email" href={`mailto:${email}`}>
              {email}
            </a>
          </div>

          <div className="CommentInfo__body">{body}</div>
        </div>
      ))}
    </div>
  );
};
