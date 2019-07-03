import React from 'react';

import './App.css';

import PostList from './components/PostList';
import posts from './api/posts';
import users from './api/users';

const postsWithUsers = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId),
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList
      posts={postsWithUsers}
    />

  </div>
);

export default App;
