import React from 'react';
import { Post } from '../Post';
import { PostListType } from '../../types';

export const PostList = ({ posts }) => (
  <ul className="posts-list">
    {posts.map(post => (
      <li className="post-list__item post-item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = PostListType;
