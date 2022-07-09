import React from 'react';
import { PostList } from './components/PostList/PostList';
import { preparedPosts } from './Variables/variables';

import './App.scss';
import comments from './api/comments';

// Help me to get rid of the cooments api here, bcsi need to pass onle preparedPosts
// But in interface its only an object but I need it as array of of objects to map it

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postList={preparedPosts} comments={comments} />
  </div>
);

export default App;
