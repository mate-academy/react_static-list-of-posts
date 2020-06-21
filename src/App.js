import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const datebase = [...posts].map((post) => {
  const matchedUser = users.find(user => user.id === post.userId);

  const postComments = comments.filter(comment => comment.postId === post.id);

  return {
    ...post, user: { ...matchedUser }, comments: [...postComments],
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={datebase} />
  </div>
);

export default App;
