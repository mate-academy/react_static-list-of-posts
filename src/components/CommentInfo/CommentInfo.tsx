import React from 'react';
import { Comment } from '../../types/types';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({
  comment: {
    name,
    body,
    email,
  },
}) => {
  return (
    <div className="user">
      <div className="user-info">
        <div className="user__info-wrapper">
          <p className="user__info-title">
            Name:
            {' '}
            <span className="user__info-name">
              {name}
            </span>
          </p>
          <p className="user__info-email">
            Email:
            {' '}
            <span className="user__info-link">
              {email}
            </span>
          </p>
        </div>
      </div>

      <div className="comments__body">
        {body}
      </div>
    </div>
  );
};
