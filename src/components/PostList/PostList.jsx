import React from 'react';
import { Post } from '../Post';
import { PostListType } from '../../types';
import './PostList.scss';

export function PostList({ posts }) {
  return (
    <ul className="posts">
      {posts.map(post => (
        <li
          key={post.id}
          className="posts__post"
        >
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PostListType.isRequired,
};
