import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Prop = {
  posts: Post[];
};

export const PostList: React.FC<Prop> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
