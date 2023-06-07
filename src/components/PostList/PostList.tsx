import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostPrepared } from '../../types/postsPrepared';

interface Props{
  posts: PostPrepared[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
