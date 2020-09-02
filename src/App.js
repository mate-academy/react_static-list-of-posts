import React from 'react';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import PostList from './components/PostList';

const preparedPosts = posts.map(elem => ({
  ...elem,
  user: { ...users.find(user => user.id === elem.userId) },
}));

const App = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
