import React from 'react';

import './PostList.scss';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="post-list ui feed">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
