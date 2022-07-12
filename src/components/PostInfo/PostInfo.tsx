import React from 'react';
import { MergePostsUsers } from '../../interfaces/interfaces';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  post: MergePostsUsers,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <span data-cy="post-title">{post.title}</span>
    <span data-cy="post-body">{post.body}</span>
    {post.user ? (
      <UserInfo name={post.user.name} email={post.user.email} />
    ) : undefined}
    <CommentList comments={post.comment} />
  </>
);
