import { FC } from 'react';
import './App.scss';
import { PostList } from './components/PostList';
import { posts } from './components/utils/_functions';

export const App: FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
