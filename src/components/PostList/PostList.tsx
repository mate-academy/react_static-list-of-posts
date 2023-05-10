import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

interface PostListProps {
  posts: Post[],
}

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
