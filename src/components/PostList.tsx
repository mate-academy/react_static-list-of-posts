import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  // post: Post;
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul data-cy="post-info">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo postInfo={post} user={post.user} comment={post.comment} />
      </li>
    ))}
  </ul>
);
