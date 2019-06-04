import React from 'react';
import './PostList.css';
import { posts } from '../posts';
import Post from './Post';

function PostList() {
  const postsList = [];
  posts.forEach(post => postsList.push(Post(post)));

  return (
    <section>
        {postsList}
    </section>
  );
}

export default PostList;