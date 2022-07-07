import React from 'react';
import { User, Comment } from '../../interfaces/interfaces';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  title: string;
  body:string;
  user: User | undefined;
  comment: Comment[] | undefined;
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comment,
}) => (
  <>
    <span data-cy="post-title">{title}</span>
    <span data-cy="post-body">{body}</span>
    {user ? (
      <UserInfo name={user.name} email={user.email} />
    ) : undefined}
    <CommentList comment={comment} />
  </>
);
