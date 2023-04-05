import React from 'react';
import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { user, name, body } = comment;

  return (
    <div className="CommentList">
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{name}</strong>

          {user && <UserInfo user={user} />}
        </div>

        <div className="CommentInfo__body">
          {body}
        </div>
      </div>
    </div>
  );
};
