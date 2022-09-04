import { PostList } from './components/PostList';

import { posts } from './helpers/getContent';

import './App.scss';

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
