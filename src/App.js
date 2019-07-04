import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import Post from './components/PostList'

const postWidthUser = posts.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
  comments: comments.filter(comment => comment.postId === item.id),
}));

const App = () => (
  <div className="App">
    <h1 className="title_page">Static list of posts</h1>
    <Post items={postWidthUser} />
  </div>
);

export default App;
