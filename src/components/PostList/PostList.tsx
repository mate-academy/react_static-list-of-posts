import React from 'react';

import './PostList.scss';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
