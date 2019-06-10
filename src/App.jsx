import React from 'react';
import './App.css';
import { users, posts, comments } from './data';
import PostList from './Components/PostList.jsx';

function App() {
  return (
    <div className="App">
      <PostList posts={posts} users={users} comments={comments}/>
    </div>
  );
}

export default App;
