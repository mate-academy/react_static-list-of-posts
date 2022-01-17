import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  post: Post,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div>
    <h1 className="has-text-centered">{post.title}</h1>
    <p>{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
  </div>
);
