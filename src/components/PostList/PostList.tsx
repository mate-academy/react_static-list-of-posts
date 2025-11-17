import React from 'react';
import './PostList.scss';

import { PreparedPost } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
