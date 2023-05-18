import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

export const PostList: React.FC <{ posts: Post[] }> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
