import React from 'react';

import './App.css';

import posts from './api/posts';
import Post from './Post';

function App() {
  const thePost = posts.map(post => <Post key={post.id} post={post} />);

  return (
    <div className="App">
      <h1 className="title">Static list of posts</h1>
      {thePost}
    </div>
  );
}
export default App;
