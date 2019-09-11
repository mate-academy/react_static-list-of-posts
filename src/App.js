import React from 'react';

import PostList from './components/PostList/PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { getPostUsers } from './api/data';

const preparedPostUsers = getPostUsers(posts, users);

const App = () => (
  <>
    <h1 className="static-list__title">Static List of Posts</h1>
    <div className="container">
      <PostList posts={preparedPostUsers} commentList={comments} />
    </div>
  </>
);

export default App;
