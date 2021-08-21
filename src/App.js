import React from 'react';
import PostList from './Details/PostList';
import posts from './api/posts';
import users from './api/users';

import './App.scss';

const App = () => {
  const unitedArray = posts.map(post => ({
    ...post,
    user: users.find(user => post.userId === user.id),
  }));

  return (
    <div className="App">
      <h1 align="center">Static list of posts</h1>
      <PostList supPosts={unitedArray} />
    </div>
  );
};

export default App;
