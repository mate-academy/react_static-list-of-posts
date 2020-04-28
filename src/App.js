import React from 'react';
import PostList from './components/PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(item => ({
  ...item,
  comments: comments.filter(comment => comment.postId === item.id),
  author: users.find(user => user.id === item.userId),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
