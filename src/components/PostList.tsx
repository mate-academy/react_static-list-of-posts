import React from 'react';

import PostInfo from './PostInfo';

import { PostListType } from '../types/PostListType';
import { PostPrepared } from '../types/PostPrepared';

export const PostList: React.FC<PostListType> = ({ postsList }) => (
  <ul className="PostList">
    {postsList.map((post: PostPrepared) => (
      <li className="PostList__item" key={post.id}>
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
