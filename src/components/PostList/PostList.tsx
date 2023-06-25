// eslint-disable-next-line

import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li
        key={post.id}
        className="PostInfo"
      >
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
