import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type PostsProps = {
  posts: Post[];
};

export const PostList: React.FC<PostsProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
