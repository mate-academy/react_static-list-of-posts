import './App.scss';

import postsFromServer from './api/posts';
import { PostList } from './components/PostList';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    {PostList(postsFromServer)}
  </section>
);
