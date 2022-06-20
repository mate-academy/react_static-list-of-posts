import React from 'react';
import PostInfo from './PostInfo';
import { PreparedPostType } from '../types';

type Props = {
  posts: PreparedPostType[]
};

const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="App__posts-list">
    {posts.map(post => (
      <li key={post.post.id} className="App__post post">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

export default PostList;
