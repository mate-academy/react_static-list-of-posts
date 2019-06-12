import React from 'react';
import {users} from './components/users.js';
import {posts} from './components/posts.js';
import {comments} from './components/comments.js';
import './App.css';
import PostsList from './components/PostsList.js';

function App() {
  return (
    <PostsList users={users} posts={posts} comments={comments} />
  );
}

export default App;
