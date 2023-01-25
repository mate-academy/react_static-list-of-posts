import React from 'react';
import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo/PostInfo';

type Prop = {
  posts: Posts[]
};

export const PostList: React.FC<Prop> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
