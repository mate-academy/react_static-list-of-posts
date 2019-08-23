import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

const listOfPosts = posts.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
  comments: comments.filter(comment => comment.postId === item.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList items={listOfPosts} />
  </div>
);

export default App;
