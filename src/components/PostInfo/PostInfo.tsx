import React from 'react';

import './PostInfo.scss';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li
    className="posts__post post"
    data-cy="post-info"
    key={post.id}
  >
    <h2 className="post__content post__title" data-cy="post-title">
      {post.title}
    </h2>

    <UserInfo user={post.user} />

    <p className="post__content post__body" data-cy="post-body">
      {post.body}
    </p>

    <CommentList comments={post.comments} />
  </li>
);
