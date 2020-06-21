import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './component/postList/PostList';
import { preparedPostsList } from './PreparedPostList';

const postsList = preparedPostsList(posts, comments, users);

const App = () => (
  <div className="App">
    <PostList posts={postsList} />
  </div>
);

export default App;
