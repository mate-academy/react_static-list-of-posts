import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from "./PostList.js";
import {comments} from "./comments.js";
import {posts} from "./posts.js";
import {users} from "./users.js";

function App() {
  return (
  <PostList posts={posts} users={users} comments={comments}/>
  );
}

export default App;

