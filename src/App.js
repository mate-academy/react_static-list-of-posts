import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';

const App = () => (
  <>
    <h1 className="title">Static list of posts</h1>
    <PostList
      posts={posts}
      users={users}
      comments={comments}
    />
  </>
);

export default App;
