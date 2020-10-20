import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';
import { convertData } from './utilities/convertData';

const preparedData = convertData(posts, users, comments);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedData} />
  </div>
);

export default App;
