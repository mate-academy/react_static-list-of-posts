import React from 'react';

import './PostList.scss';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts__list">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </ul>
);
