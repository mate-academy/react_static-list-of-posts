import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList />
  </section>
);
