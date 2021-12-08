import React from 'react';

import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../types/Post';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="postList__container">
    {posts.map((post) => (
      <PostInfo post={post} />
    ))}
  </div>
);
