import React from 'react';

import { PostInfo } from '../PostInfo/PostInfo';

import { Post } from '../../types/Posts';

import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostsList: React.FC<Props> = ({ posts }) => (
  <ul className="postsList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </ul>
);
