import React from 'react';
import './App.css';
import { PostList } from "./components/PostList";
import {posts} from './data/posts';
import {users} from './data/users';

function App() {
  return (
    <PostList posts={posts} users={users} />
  );
}

export default App; 