import React from 'react';

import { Post } from '../../types';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="posts">
    {
      posts.map((post) => (
        <li key={post.id} className="post__item">
          <PostInfo post={post} />
        </li>
      ))
    }
  </ul>
);
