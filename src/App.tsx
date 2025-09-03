import React from 'react';
import { PostList } from './components/PostList';
import { preparePosts } from './utils/preparePosts';

import './App.scss';

export const App: React.FC = () => {
  const posts = preparePosts();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
