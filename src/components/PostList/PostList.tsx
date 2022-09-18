import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

export const PostList: React.FC<{ posts: Array<Post> }> = ({ posts }) => (
  <div className="PostList">
    {(posts.map((post) => (
      <PostInfo
        post={post}
        key={post.id}
      />
    )))}
  </div>
);
