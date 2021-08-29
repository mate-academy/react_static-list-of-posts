import React from 'react';
import { Post } from '../Types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="container">
    {posts.map(post => (
      <div className="card border-info mb-3" key={post.id}>
        <PostInfo {...post} />
      </div>
    ))}
  </div>
);
