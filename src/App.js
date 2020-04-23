import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList/PostList';

const preparedList = posts.map(post => ({
  ...post,
  author: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => post.id === comment.postId),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postList={preparedList} />
  </div>
);

export default App;
