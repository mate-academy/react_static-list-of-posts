/* eslint-disable no-console */
import React from 'react';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList/PostList';

const completedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

console.log(completedPosts);

const App = () => (
  <div className="App">
    <h1 className="main-header">Static List Of Posts</h1>
    <div className="post">
      <PostList preparedPosts={completedPosts} />
    </div>
  </div>
);

export default App;
