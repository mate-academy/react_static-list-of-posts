import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PostList } from './components/PostList';
import preparedPostss from './helpers/preparedPosts';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList posts={preparedPostss} />
  </div>
);

export default App;
