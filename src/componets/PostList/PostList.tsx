import React from 'react';
import { Posts } from '../../types/types';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <li className="post__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
