import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post
};
export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info">
    <p data-cy="post-title">
      {post.title}
    </p>
    <p data-cy="post-body">
      {post.body}
    </p>
    {post.user && <UserInfo user={post.user} /> }
    {post.comments && <CommentList comments={post.comments} />}
  </div>
);
