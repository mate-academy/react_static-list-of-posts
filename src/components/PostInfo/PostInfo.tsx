import React from 'react';

import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import { Comment } from '../../types/Comment';
import { User } from '../../types/User';

type Props = {
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
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
  </>
);
