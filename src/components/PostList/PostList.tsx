import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

type PostsProps = {
  posts: Post[];
};

export const PostList: React.FC<PostsProps> = ({ posts = [] }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
