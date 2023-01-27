import { FC } from 'react';
import { PostList } from './components/PostList';
import { posts } from './api/posts';

import './App.scss';

export const App: FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
