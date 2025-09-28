import React from 'react';
import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Posts';
import './PostList.scss';

interface PostListProps {
  posts: Posts[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
