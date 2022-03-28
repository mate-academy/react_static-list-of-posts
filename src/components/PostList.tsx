import React from 'react';
import { Post } from '../types/post';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li>
        <PostInfo
          title={post.title}
          user={post.user}
          body={post.body}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);
