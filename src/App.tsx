import React from 'react';
import './App.scss';

import comments from './api/comments';
import users from './api/users';
import posts from './api/posts';

import { PostList } from './components/PostList';
import { getPreparedComments, getPreparedPosts, getPreparedUsers } from './helpers';

const preparedPosts = getPreparedPosts(
  posts,
  getPreparedUsers(users),
  getPreparedComments(comments),
);

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
