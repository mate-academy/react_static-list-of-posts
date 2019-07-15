import React from 'react';

import './App.css';

import posts from './api/posts';
import PostList from './components/PostList';

import { getUser, getComment } from './utils';

const currentPosts = posts.map(post => ({
  ...post,
  user: getUser(post.userId),
  comment: getComment(post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList allPosts={currentPosts} />

  </div>
);

export default App;
