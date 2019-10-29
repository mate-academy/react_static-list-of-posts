import React from 'react';
import './App.css';
import Postlist from './components/Postlist/Postlist';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <Postlist posts={posts} comments={comments} users={users} />
);

export default App;
