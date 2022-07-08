import React from 'react';
import './PostInfo.scss';
import { Comment, User } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

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
  <>
    <div data-cy="post-info">
      <h2 data-cy="post-title">{title}</h2>
      <div data-cy="post-body">{body}</div>
      <div>
        <UserInfo user={user} />
      </div>
      <CommentList comments={comments} />
    </div>
  </>
);
