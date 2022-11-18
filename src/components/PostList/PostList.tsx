import React from 'react';
import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Posts[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
    {/* {
      posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))
    } */}
  </div>
);
