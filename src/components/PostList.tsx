import React from 'react';
import { Post } from './types/Post';
import { PostInfo } from './PostInfo';

type Props = {
  preparedPosts: Post[];
};

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(post => (
      <li className="postList" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
