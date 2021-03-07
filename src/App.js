import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments,
}));

const App = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
