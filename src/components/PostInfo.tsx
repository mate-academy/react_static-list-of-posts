import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

interface Props {
  post: Post,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div>
    <h1 className="has-text-centered">{post.title}</h1>
    <p>{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    <CommentList comments={post.comments} />
  </div>
);
