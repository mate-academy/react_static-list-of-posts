import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';

import './PostInfo.scss';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[] | null,
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="post">
    <h2 className="post__title" data-cy="post-title">{title}</h2>
    <p className="post__body" data-cy="post-body">{body}</p>

    {user && (
      <UserInfo
        name={user.name}
        email={user.email}
        phone={user.phone}
      />
    )}

    {comments && (
      <CommentList comments={comments} />
    )}
  </div>
);
