import React from 'react';
import { posts } from './posts';
import Post from './Post';

export default function PostList() {
  return (
    <div>
      { posts.map(post =>
        <Post title={post.title} text={post.body} id={post.userId} key={post.id} />) }
    </div>
  );
}
