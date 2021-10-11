import React from 'react';
import { PostCard } from './PostCard';
import { Post } from '../App';

export const PostsList: React.FC<{ posts: Post[]; }> = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard post={post} key={post.id} />
    ))}
  </div>
);
