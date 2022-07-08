import React from 'react';
import { Comment, User } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div data-cy="post-info">
    <h1 className="title" data-cy="post-title">{title}</h1>
    <p data-cy="post-body">{body}</p>
    <div>
      <UserInfo user={user} />
    </div>
    <CommentList comments={comments} />
  </div>
);
