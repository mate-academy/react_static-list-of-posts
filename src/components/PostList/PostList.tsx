import React from 'react';
// import posts from '../../api/posts';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

interface Props {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
