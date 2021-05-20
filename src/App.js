import React from 'react';

import './App.scss';
import { PostsList } from './components/PostsList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

function findUser(userId) {
  return users.find(user => user.id === userId);
}

function findComents(postId) {
  return comments.filter(comment => comment.postId === postId);
}

const preparedPosts = posts.map(post => ({
  ...post, user: findUser(post.userId), comments: findComents(post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="App__header">Static list of posts</h1>
    <PostsList posts={preparedPosts} />
  </div>
);

export default App;
