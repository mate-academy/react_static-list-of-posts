import React from 'react';
import { PostInfo } from './PostInfo';

interface Props {
  posts: Post[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="content container is-fluid">
    {posts.map(post => (
      <li key={post.id} className="card card-content">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
