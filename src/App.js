import React from 'react';
import './App.css';
import PostList from './components/PostList';
import { posts } from './posts';
import { users } from './users';
import { comments } from './comments';

function App() {
  const usersObj = users.reduce((accumulator, currentValue) => {
    accumulator[currentValue.id] = currentValue;
    return accumulator;
  }, {});
  return <PostList users={usersObj} posts={posts} comments={comments}/>;
}

export default App;
