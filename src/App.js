import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const fullPosts = posts.map(post => ({
  ...post,
  user: users.find(item => item.id === post.userId),
  comments: comments.filter(item => item.postId === post.id),
}));

const App = () => (
  <div className="App">

    <PostList postList={fullPosts} />

  </div>
);

export default App;
