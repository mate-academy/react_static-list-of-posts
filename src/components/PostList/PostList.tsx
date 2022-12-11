import React from 'react';

import { Post } from '../../types/Post';

import './PostList.scss';

import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
        key={post.id}
      />
    ))}
  </div>
);
