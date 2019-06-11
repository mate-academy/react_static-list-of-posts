import React from 'react';
import { posts } from '../posts';
import Post from './Post';

export default function PostList() {
  const postsList = [];
  posts.forEach(post => postsList.push(Post(post)));

  return (
    <div className='section'>
        {postsList}
    </div>
  );
}
