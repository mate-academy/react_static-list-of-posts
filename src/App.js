import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.userId),
  user: users.find(user => user.id === post.userId),
}));

const App = () => (
  <div className="app">
    <h1 className="title is-1 is-spaced">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
