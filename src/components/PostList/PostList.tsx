import React from 'react';
import { Post } from '../../types/Post';

interface PostListProps {
  postList: Post[]
}

export const PostList: React.FC<PostListProps> = () => (
  <div className="PostList">
    abc
  </div>
);
