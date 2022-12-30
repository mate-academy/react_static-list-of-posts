import React from 'react';
import { Post } from '../../Types/posts';
import { PostInfo } from '../PostInfo';

interface Posts {
  posts: Post[],
}

export const PostList: React.FC<Posts> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
