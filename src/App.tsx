import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import { posts } from './helpers/updatePosts';

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
