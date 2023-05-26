import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

interface CommentInfoProps {
  comment: Comment;
}

export const CommentInfo: React.FC <CommentInfoProps> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <>
      <div className="CommentInfo">
        <p className="CommentInfo__title">
          <strong className="CommentInfo__name">
            {name}
          </strong>
          {' by '}

          <a className="CommentInfo__email" href={`mailto:${email}`}>{email}</a>
          <div className="CommentInfo__body">
            {body}
          </div>
        </p>

      </div>
    </>
  );
};
