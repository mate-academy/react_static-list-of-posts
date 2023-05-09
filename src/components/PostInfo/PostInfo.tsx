import React from 'react';
import { Users } from '../../types/Users';
import { Comment } from '../../types/Comments';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

type Props = {
  title: string;
  body: string;
  user: Users | null;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = (
  {
    user,
    title,
    body,
    comments,
  },
) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      {user && (
        <p>
          {' Posted by  '}
          <UserInfo user={user} />
        </p>
      )}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <CommentList comments={comments} />
  </div>
);
