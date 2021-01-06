import React from 'react';
import { TodoList } from './components/TodoList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <TodoList
      post={posts}
      comment={comments}
      user={users}
    />
  </div>
);

export default App;
