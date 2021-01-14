import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Stats } from './components/Stats';
import { PostList } from './components/PostList';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <Stats
      posts={posts.length}
      comments={comments.length}
      users={users.length}
    />

    <PostList posts={posts} />
  </div>
);

export default App;
