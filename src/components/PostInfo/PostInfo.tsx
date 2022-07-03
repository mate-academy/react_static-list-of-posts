import React from 'react';

import './PostInfo.scss';

import User from '../../types/User';
import Comment from '../../types/Comment';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  title: string;
  body: string;
  user: User;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <div className="PostInfo" data-cy="post-info">
      <h1 data-cy="post-title">{title}</h1>

      <p data-cy="post-body">{body}</p>
    </div>

    <UserInfo name={user.name} email={user.email} />

    <hr />

    <CommentList comments={comments} />
  </>
);
