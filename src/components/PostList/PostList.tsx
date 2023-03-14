import React from 'react';

import './PostList.scss';

import { PostInfo } from '../PostInfo';
import { Post } from '../../types/PostInfo';

interface Posts {
  posts: Post[];
}

export const PostList: React.FC<Posts> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
