import React from 'react';

import { PostInfo } from '../PostInfo';

import { Post } from '../../types/posts';

import './PostList.scss';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
