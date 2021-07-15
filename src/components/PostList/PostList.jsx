import React from 'react';
import Post from '../Post/Post';
import { PostListTypes } from '../../propTypes/types';

export function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

PostList.propTypes = PostListTypes;
