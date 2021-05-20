import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const App = () => (
  <PostList posts={posts} comments={comments} users={users} />
);

export default App;
