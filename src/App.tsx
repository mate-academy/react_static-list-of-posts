import React from 'react';

import './App.scss';

import { posts } from './components/Posts/posts';
import { PostList } from './components/PostList/PostList';

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
