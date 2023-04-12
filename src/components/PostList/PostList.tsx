import React from 'react';
import { PreparedPosts } from '../../types/PreparedPosts';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: PreparedPosts[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
