import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

export const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
