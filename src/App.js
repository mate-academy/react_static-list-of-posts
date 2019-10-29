import React from 'react';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import getPostsWithUsersAndComents from './api/fullPosts';
import PostList from './components/PostList';

const App = () => (
  <PostList fullPosts={getPostsWithUsersAndComents(posts, users, comments)} />
);

export default App;
