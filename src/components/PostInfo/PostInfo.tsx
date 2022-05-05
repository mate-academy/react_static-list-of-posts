import React from 'react';
import { Post } from '../Types/Types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <ul data-cy="post-info">
    <li data-cy="post-title">
      {`PostTitle: ${post.title}`}
    </li>

    <li data-cy="post-body">
      {`PostBody: ${post.body}`}
    </li>

    {post.user && <UserInfo user={post.user} />}
    <CommentList comments={post.comments} />
  </ul>
);
