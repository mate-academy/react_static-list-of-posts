import React from 'react';
import './PostInfo.scss';
import { Post } from '../../Types/Types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info">
    <h2 data-cy="post-title">
      Title:
      {post.title}
    </h2>
    <p data-cy="post-body">{post.body}</p>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);
