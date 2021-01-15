import React from 'react';
import { Post } from '../Post';
import { PostListType } from '../types';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li
        key={post.id}
        className="post"
        {...post}
      >
        <Post {...post} />

      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PostListType.isRequired,
};
