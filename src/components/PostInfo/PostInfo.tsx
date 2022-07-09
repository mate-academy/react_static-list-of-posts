import React from 'react';
import { User, Comment } from '../../interfaces/interfaces';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  title: string;
  body:string;
  user: User | undefined;
  comments: Comment[] | undefined;
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <span data-cy="post-title">{title}</span>
    <span data-cy="post-body">{body}</span>
    {user ? (
      <UserInfo name={user.name} email={user.email} />
    ) : undefined}
    <CommentList comments={comments} />
  </>
);
