import React from 'react';
import Container from 'react-bootstrap/Container';

import { PostList } from './components/PostList/PostList';
import { Counters } from './components/Counters/Counters';
import posts from './api/posts';

import './App.css';

const App = () => (
  <Container className="App">
    <h1>Static list of posts</h1>
    <Counters />
    <PostList posts={posts} />
  </Container>
);

export default App;
