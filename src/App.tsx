import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import { posts } from './utils/posts';

export const App: React.FC = () => (
  <section className="app">
    <h1 className="app__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
