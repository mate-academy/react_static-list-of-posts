import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList';

const prerapedPostList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postList={prerapedPostList} />
  </div>
);

export default App;
