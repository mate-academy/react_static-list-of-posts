import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const getUser = userId => (
  users.find(user => user.id === userId)
);

const getComment = postId => (
  comments.filter(comment => comment.postId === postId)
);

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
