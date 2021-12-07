import React from 'react';
import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';

import { Post } from '../../types/Post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li className="PostList__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
